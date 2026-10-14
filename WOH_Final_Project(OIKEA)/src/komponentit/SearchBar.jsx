import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({ setResults, setError, addToHistory }) => {
    const [input, setInput] = useState("");

    {/* Funktio Pokemonin tietojen hakemiseen API:sta */}
    const fetchData = async (value) => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase().trim()}`);
            
            // Tarkistetaan, jos vastaus ei onnistunut.
            if (!response.ok) {
                throw new Error("Pokémonia ei löytynyt!");
            }

            const data = await response.json();
            setResults(data);
            setError(null);
            
            if (addToHistory) {
                addToHistory(data.name);
            }

        } catch (err) {
            setResults(null); 
            setError(err.message); 
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            fetchData(input);
        }
    };

    {/* Koodi hakupalkille ja hae-napille */}
    return (
        <form onSubmit={handleSubmit} className="input-wrapper">
            <FaSearch id="search-icon" className="search-icon" />
            <input
                type="text"
                placeholder="Kirjoita Pokemonin nimi..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Hae
            </button>
        </form>
    );
}