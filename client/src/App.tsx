import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/common/Header';
import OrderList from './components/OrderList';
import About from './views/About';

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Router>
          <Routes>
            {/* Home route */}
            <Route path="/" element={ "Home" } />
            <Route path="/menu" element={<ProductList />} />
            {/* Other routes */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
            <Route path="/orders" element={<OrderList />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </main>
    </>
)
}

export default App;
