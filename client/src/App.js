import Navbar from './components/Navbar';
import CoffeeList from './components/CoffeeList';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='mx-4'>
        <CoffeeList />
      </main>
    </div>
  );
}

export default App;
