import {useState} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { History } from './komponentit/History';
import { Asetukset } from './komponentit/Settings';
import { SearchBar } from './komponentit/SearchBar';




function App() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  const addToHistory = (pokemonName) => {
    setHistory((prevHistory) => {
      if (!prevHistory.includes(pokemonName)) {
        return [...prevHistory, pokemonName];
      }
      return prevHistory;
    });
  };

  return (
  
  <Router>
    <div className="App">
      {/* Navigointivalikko */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 mb-4">
          <div className="navbar-nav flex-row gap-3">
            <Link className="nav-link text-white" to="/">Etusivu</Link>
            <Link className="nav-link text-white" to="/history">Historia</Link>
            <Link className="nav-link text-white" to="/settings">Asetukset</Link>
          </div>
        </nav>

        <Routes>
          {/* Etusivu */}
          <Route path="/" element={
            <div className="search-bar-container mt-4">
              <SearchBar setResults={setResults} setError={setError} addToHistory={addToHistory} />
              <button id="clear-results" onClick={() => setResults(null)} className="btn btn-secondary mt-2">Tyhjennä</button>
              {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
              
              <div className="search-results mt-3">
                {results ? (
                  <div className="poke-info" id="poke-info">
                    <h2>{results.name}</h2>
                    <img src={results.sprites.front_default} alt={results.name} />
                    <p><strong>Height: </strong>{results.height}0cm</p>
                    <p><strong>Weight: </strong>{results.weight}kg</p>
                    <p><strong>Ability: </strong>{results.abilities[0].ability.name}</p>
                    <p><strong>Base Experience: </strong>{results.base_experience}XP</p>
                    <p><strong>Move: </strong>{results.moves[0].move.name}</p>
                  </div>
                ) : !error && (
                  <div>SearchResults</div>
                )}
              </div>
            </div>
          } />
          {/* Historia-sivu */}
          <Route path="/history" element={<History history={history} />} />
          {/* Asetukset-sivu */}
          <Route path="/settings" element={<Asetukset />} />
        </Routes>
        </div>
    </Router>
  ); 
}     

export default App;