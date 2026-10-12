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
          {results ? (
            <div className="poke-info" id="poke-info">
              <h2>{results.name}</h2>
              <p>Height: {results.height}0cm</p>
              <p>Weight: {results.weight}kg</p>
              <p>Ability: {results.abilities[0].ability.name}</p>
              <p>Base Experience: {results.base_experience}XP</p>
              <p>Move: {results.moves[0].move.name}</p>
            </div>
          ) :  (
            <div>SearchResults</div>
          )}
        </div>
      </div>
    </div>
  ); 
}     

export default App;