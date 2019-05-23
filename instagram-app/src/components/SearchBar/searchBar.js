import React from 'react'
import './searchBar.css'

function SearchBar() {
  return (
    <div className="search-bar-container">
      <div className="logo-container">
        <i class="fab fa-instagram fa-3x"></i>
        <p>Instagram</p>
      </div>

      <div className="search-field-container">
        <form>
          <input type="text" className="search-input" placeholder="Search" name="search"></input>
        </form>
      </div>

      <div className="ui-icon-container">
        <i class="far fa-compass"></i>
        <i class="far fa-heart"></i>
        <i class="far fa-user"></i>
      </div>

    </div>
  );
}

export default SearchBar;