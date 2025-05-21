// server/src/app.ts
import express from 'express';
import path from 'path';
import itemRoutes from './routes/itemRoutes';
import productRoutes from './routes/productRoutes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();

// Save original app.use
const originalUse = app.use.bind(app);

// Override app.use to log route paths
app.use = ((pathOrHandler: any, ...handlers: any[]) => {
  if (typeof pathOrHandler === 'string') {
    console.log('Registering middleware/route for path:', pathOrHandler);
  }
  return originalUse(pathOrHandler, ...handlers);
}) as typeof app.use;

app.use(express.json());

// Routes
app.use('/api/items', itemRoutes);
app.use('/api/products', productRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

// Serve static files from React
app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

// For any non-API route, serve React index.html
/* import { Request, Response, NextFunction } from 'express'; */

app.get(/^\/(?!api).*/, (req, res, next) => {
  // Matches any GET path NOT starting with /api
  res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'), (err) => {
    if (err) next(err);
  });
});

// Catch unmatched API routes
app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API route not found' });
});

export default app;
