import React from 'react'
import '../assets/css/SearchBar.css'

function SearchBar(props) {
  const handleInputChange = (e) => {
    const value = e.target.value
    props.onChange(value)
  };

  return (
    <form className='search-container'>
      <input 
        type='text' 
        placeholder='Search a Todo'
        className='search-input'
        onChange={handleInputChange}
      />
      <button type='submit' className='search-btn'>Search</button>
    </form>
  )
}

export default SearchBar