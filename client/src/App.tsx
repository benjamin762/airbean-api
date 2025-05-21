import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/common/Header';

function App() {
  return (
    <>
      <Header title="AirBean" />
      <main className="App">
        <Router>
          <Routes>
            {/* Home route */}
            <Route path="/" element={ "Home" } />
            <Route path="/menu" element={<ProductList />} />
            {/* Other routes */}
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </Router>
      </main>
    </>
)
}

export default App;
