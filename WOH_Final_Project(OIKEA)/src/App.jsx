import {useState} from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo1 from './assets/logo1.png';
import { History } from './komponentit/History';
import { Asetukset } from './komponentit/Settings';
import { SearchBar } from './komponentit/SearchBar';




function App() {
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);

  {/* Funktio Pokemonin nimen lisäämiseen historiaan*/}
  const addToHistory = (pokemonName) => {
    setHistory((prevHistory) => {
      if (!prevHistory.includes(pokemonName)) {
        return [...prevHistory, pokemonName];
      }
      return prevHistory;
    });
  };

  {/* Funktio tauskauvan kuvan asettamiseen */}
  const [activeBackground, setActiveBackground] = useState(null);

  return (
  <Router>
    <div 
    className="App"
    style={{
    backgroundImage: activeBackground
      ? `url('${activeBackground}')`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh'
  }}>
      {/* Navigointivalikko */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3 mb-4">
          <div className="navbar-nav flex-row gap-3">
            <Link className="nav-link text-white" to="/">Etusivu</Link>
            <Link className="nav-link text-white" to="/history">Historia</Link>
            <Link className="nav-link text-white" to="/asetukset">Asetukset</Link>
          </div>
        </nav>

        <Routes>
          {/* Etusivu */}
          <Route path="/" element={
            <div>
            <div className="text-center mt-4">
              <img src={logo1} alt="Logo" style={{ width: '350px', height: 'auto', marginTop: '0px'}} />
            </div>
            <div className="search-bar-container " style={{ marginTop: '-200px', textAlign: 'center' }}>
              <SearchBar setResults={setResults} setError={setError} addToHistory={addToHistory} />
              <button id="clear-results" onClick={() => setResults(null)} className="btn btn-secondary mt-2">Tyhjennä</button>
              {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        
              {/* Näytetään Pokemonin tiedot, jos niitä on */ }
              <div className="search-results mt-3">
                {results ? (
                  <div className="card p-4 bg-white text-dark mx-auto rounded-4" id="poke-info" style={{ maxWidth: '350px'}}>
                    <h2 className="text-capitalize">{results.name}</h2>
                    <img src={results.sprites.front_default} alt={results.name} className="mx-auto d-block" style={{width: '120px'}}/>
                    <p className="mb-2"><strong>Height: </strong>{results.height}0cm</p>
                    <p className="mb-2"><strong>Weight: </strong>{results.weight}kg</p>
                    <p className="mb-2"><strong>Ability: </strong>{results.abilities[0].ability.name}</p>
                    <p className="mb-2"><strong>Base Experience: </strong>{results.base_experience}XP</p>
                    <p className="mb-2"><strong>Move: </strong>{results.moves[0].move.name}</p>
                  </div>
                ) : !error && (
                  <p></p>
                )}
              </div>
            </div>
          </div>
          } />
          {/* Historia-sivu */}
          <Route path="/history" element={<History history={history} />} />
          {/* Asetukset-sivu */}
          <Route path="/asetukset" element={<Asetukset setActiveBackground={setActiveBackground} />} />
        </Routes>
        </div>
    </Router>
  ); 
}     

export default App;