import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const data = await response.json();
        console.log(data);
        setResults(data);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input.trim() !== "") {
            fetchData(input);
        }
    };

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