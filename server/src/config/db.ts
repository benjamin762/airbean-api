// server/src/config/db.ts
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
});

// Optional: graceful shutdown
process.on('SIGINT', async () => {
  await pool.end();
  console.log('📦 Database pool has ended');
  process.exit(0);
});

export default pool;
