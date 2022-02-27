import Navbar from './components/Navbar';
import CoffeeList from './components/CoffeeList';
import './App.css';

const coffees = [
  {
    id: 1,
    coffeeName: 'Mocha Frappuccino',
    coffeImage: 'mocha_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 13.5,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 15.5,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 16.5,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 2,
    coffeeName: 'Pistachio Mocha Frappuccino',
    coffeImage: 'pistachio_mocha_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 15.0,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 17.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 18.0,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 3,
    coffeeName: 'Matcha Frappuccino',
    coffeImage: 'pistachio_mocha_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 14.5,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 16.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 17.0,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 4,
    coffeeName: 'Black & White Frappuccino',
    coffeImage: 'black_white_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 15.0,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 17.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 18.0,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 5,
    coffeeName: 'Ultimate Caramel Frappuccino',
    coffeImage: 'ultimate_caramel_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 15.0,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 17.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 18.0,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 6,
    coffeeName: 'Chocolucuma Frappuccino',
    coffeImage: 'chocolucuma_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 15.0,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 17.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 18.0,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 7,
    coffeeName: 'Ultra Fresa Creme Frappuccino',
    coffeImage: 'ultra_fresa_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 15.0,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 17.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 18.0,
        cap: '500 ml',
      },
    ],
  },
  {
    id: 8,
    coffeeName: 'Caramel Frappucchino',
    coffeImage: 'caramel_frap.png',
    coffeePrices: [
      {
        type: 'Alto',
        price: 15.0,
        cap: '300 ml',
      },
      {
        type: 'Grande',
        price: 17.0,
        cap: '400 ml',
      },
      {
        type: 'Venti',
        price: 18.0,
        cap: '500 ml',
      },
    ],
  },
];

function App() {
  return (
    <div className='App'>
      <Navbar />
      <main className='mx-4'>
        <CoffeeList data={coffees} />
      </main>
    </div>
  );
}

export default App;
