// pages/search.js
"use client";
import React, { useState } from 'react';
import classesData from 'classes.json';  // Adjust the path to your JSON file accordingly
import styles from 'search.module.css';  // Import a CSS module for styling
import { useHistory } from 'react-router-dom'; // Import useHistory hook from 'react-router-dom'

function Search() {
  const history = useHistory(); // Create a history object
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    searchClasses(query);

    // Navigate to the search results page
    history.push('/search-results');
  };

  const searchClasses = (query) => {
    let searchResults = [];
    classesData.universities.forEach(university => {
      university.classes.forEach(course => {
        if (course.course_code.toLowerCase().includes(query.toLowerCase()) ||
            course.alternate_name.toLowerCase().includes(query.toLowerCase())) {
          searchResults.push({ university: university.name, ...course });
        }
      });
    });

    setResults(searchResults);
  };

  const generateSuggestions = (query) => {
    let suggestions = [];
    if (query.length > 2) {
      classesData.universities.forEach(university => {
        university.classes.forEach(course => {
          if (course.course_code.toLowerCase().includes(query.toLowerCase()) ||
              course.alternate_name.toLowerCase().includes(query.toLowerCase())) {
            suggestions.push({ university: university.name, ...course });
          }
        });
      });
      setSuggestions(suggestions.slice(0, 5));
    } else {
      setSuggestions([]);
    }
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    generateSuggestions(newQuery);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Office Hours</h1>
      <form onSubmit={handleSearch} className={styles.searchContainer}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          className={styles.searchBox}
          placeholder="Search for a class..."
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
      <div className={styles.suggestions}>
        {suggestions.map((suggestion, index) => (
          <div
            key={index}
            className={styles.suggestionItem}
            onClick={() => {
              handleSuggestionClick(suggestion);
              setQuery(`${suggestion.course_code} - ${suggestion.alternate_name}`);
              setSuggestions([]);
            }}
          >
            {suggestion.course_code} - {suggestion.alternate_name}
          </div>
        ))}
      </div>
    </div>
  );
}

async function handleSuggestionClick(suggestion) {
  if (suggestion.course_code === "CSE 2221") {
    window.location.href = "https://www.google.com";
  } else {
    // Handle other suggestion clicks here
  }
}

export default Search;
