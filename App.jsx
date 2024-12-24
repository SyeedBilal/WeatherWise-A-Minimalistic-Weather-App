import './App.css';
import Header from './Header';
import Input from './Input';
import Card from './Card';
import { useState } from 'react';

function App() {
  const [currCity, setCurrCity] = useState('');
  const [cityData, setCityData] = useState({});

  return (
    <>
      {console.log(currCity)}
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: 'linear-gradient(45deg, rgba(35,176,82,1) 13%, rgba(68,78,113,1) 91%)',
        }}
      >
        <div className="max-w-md bg-white/30 backdrop-blur-md p-6 rounded-lg shadow-lg text-white">
          {/* App Header */}
          <Header />
          {/* Input Field and Buttons */}
          <Input setCurrCity={setCurrCity} cityName={currCity} setCityData={setCityData} />
          {/* Weather Data Card */}
          <Card cityData={cityData} />
        </div>
      </div>
    </>
  );
}

export default App;
