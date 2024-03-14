import React from 'react'
import { IoSearch } from "react-icons/io5";

const SearchField = () => {
  return (
    <div className="SearchField">
              <IoSearch className="search__icon" />
    <input type="text" className="search__input" placeholder="ابحث حسب اسم المستخدم" />
    <button className="search__button">
    </button>
  </div>
  
  )
}

export default SearchField