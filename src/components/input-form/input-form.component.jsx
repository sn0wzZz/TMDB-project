import { Box } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import { API_KEY, BASE_URL } from '../../config'
import axios from 'axios'
import InputButton from '../input-button/input-button.component'

export default function InputForm() {
  const { setMovieNames, movies, setMovies, moviesFilteredFirst } =
    useContext(AppContext)

  const getInfo = (allTitles) => {
    allTitles.map((singleTitle) =>
      axios
        .get(`${BASE_URL}search/movie?api_key=${API_KEY}&query=${singleTitle}`)
        .then((res) => {
          const currMovie = res.data.results[0]
          setMovies((movies) => [...movies, currMovie])
        })
    )
  }

  const onChange = (e) => {
    const files = e.target.files

    const reader = new FileReader()
    if (!files.length || files.length > 1) return

    reader.onload = (e) => {
      const file = e.target.result
      const lowerWords = ['of', 'the', 'a', 'and', 'an', 'du', 'to']
      const refactoredMovieNames = file
        .toLocaleLowerCase()
        .split(',')
        .map((movie) => movie.trim().split(' '))
        .map((movie) =>
          movie.map((word, i) =>
            i > 0 && lowerWords.includes(word)
              ? word
              : word[0].toUpperCase() + word.slice(1)
          )
        )
        .map((movie) => movie.join(' '))
      const uniqueMovieNames = [...new Set(refactoredMovieNames)]
      getInfo(uniqueMovieNames)
      setMovieNames(uniqueMovieNames)
    }
    reader.onerror = (e) => alert(e.target.error.name)
    reader.readAsText(files[0])
    console.log(movies)
  }

  if (!moviesFilteredFirst[0])
    return (
      <Box sx={styles.uploadBox}>
        <input
          accept=".txt,.doc,.docx,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className={'input-field'}
          style={{ display: 'none' }}
          id="raised-button-file"
          type="file"
          onChange={!moviesFilteredFirst[0] ? onChange : console.log('hi')}
        />
        <label htmlFor="raised-button-file">
          <InputButton />
        </label>
      </Box>
    )

  return (
    <Box sx={styles.uploadBox}>
      <InputButton />
    </Box>
  )
}

const styles = {
  uploadBox: {
    width: '100%',
    height: '100%',
    maxHeight: '20vh',
    minHeight: '30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
}
