import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import CartPage from './pages/CartPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='mx-4'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coffees/:slug' element={<DetailPage />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
