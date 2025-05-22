import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/common/Header';
import OrderList from './components/OrderList';
import About from './views/About';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <main className="App">
        <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/menu" element={<ProductList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </main>
    </>
  );
}

export default App;
