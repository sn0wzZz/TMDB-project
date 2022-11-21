import React, { useState, createContext } from 'react'

export const AppContext = createContext({
  movieNames: null,
  setMovieNames: () => {},
  moviesFilteredFirst: null,
  setMoviesFilteredFirst: () => {},
  movies: [],
  setMovies: () => {},
  moviesFilteredFinal: null,
  setMoviesFilteredFinal: () => {},
  buttonSaveState: false,
  setButtonSaveState: () => {},
})

export const AppProvider = ({ children }) => {
  const [movieNames, setMovieNames] = useState(null)
  const [moviesFilteredFirst, setMoviesFilteredFirst] = useState([])
  const [movies, setMovies] = useState([])
  const [moviesFilteredFinal, setMoviesFilteredFinal] = useState([])
  const [buttonSaveState, setButtonSaveState] = useState(false)

  const value = {
    movieNames,
    setMovieNames,
    moviesFilteredFirst,
    setMoviesFilteredFirst,
    movies,
    setMovies,
    moviesFilteredFinal,
    setMoviesFilteredFinal,
    buttonSaveState,
    setButtonSaveState,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
