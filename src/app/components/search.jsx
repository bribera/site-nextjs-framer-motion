
'use client'
import React, {useState, useEffect, createContext, useContext} from 'react'

export const SearchContext = createContext()
const SearchContextProvider = ({children}) => {
    const [searchActive, setSearchActive] = useState(false)
  return (
    <SearchContext.Provider value={{searchActive, setSearchActive}}>
      {children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider

export const useSearchContext = () => useContext(SearchContext)