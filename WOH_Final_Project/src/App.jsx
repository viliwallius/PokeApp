import {useState} from 'react';

import './App.css';
import { SearchBar } from './komponentit/SearchBar';


function App() {
  const [results, setResults] = useState(null);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        
        {/* Näytetään säätiedot, jos niitä on haettu */}
        <div className="search-results">
          {results && results.current ? (
            <div className="weather-info">
              <h2>{results.location.name}, {results.location.country}</h2>
              <p>Lämpötila: {results.current.temperature}°C</p>
              <p>Säätila: {results.current.weather_descriptions[0]}</p>
              <p>Tuuli: {results.current.wind_speed} km/h</p>
              <p>Kosteus: {results.current.humidity}%</p>
            </div>
          ) : results && results.success === false ? (
            <p className="error-message">Kaupunkia ei löytynyt.</p>
          ) : (
            <div>SearchResults</div>
          )}
        </div>
      </div>
    </div>
  ); 
}     

export default App;