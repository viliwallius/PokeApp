import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import './SearchBar.css';

export const SearchBar = () => {
    const [input, setInput] = useState("");

    const fetchData = (value) => {
        fetch(`http://api.weatherstack.com/current?access_key=4a0d1f77217d0c310e7d570d880a7463&query=${value}`)
    }

    const handleChange = (value) => {
        setInput(value);
        fetchData(value);
    };

    return <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Type to search..."  value={input} onChange={(e) => handleChange(e.target.value)} />
    </div>;
}