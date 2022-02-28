import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='mx-4'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/coffees/:id' element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
