import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = ({setResults}) => {
    const [input, setInput] = useState("");

    const fetchData = async (value) => {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=4a0d1f77217d0c310e7d570d880a7463&query=${value}`);
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
            <FaSearch className="search-icon" />
            <input
                type="text"
                placeholder="Kirjoita kaupunki..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="submit-button">
                Hae
            </button>
        </form>
    );
}