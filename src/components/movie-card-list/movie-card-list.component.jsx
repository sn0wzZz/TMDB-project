import { Box, Container } from '@mui/material'
import MovieCard from '../movie-card/movie-card.component'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import axios from 'axios'

export default function MovieCardList() {
  const {
    movies,
    moviesFilteredFirst,
    movieNames,
    buttonSaveState,
    setButtonSaveState,
  } = useContext(AppContext)

  if (!moviesFilteredFirst[0])
    return (
      <Box sx={styles.alertBox}>
        <SmartToyIcon fontSize="large" />
        <p style={{ width: '300px', textAlign: 'center' }}>
          {!movieNames
            ? "Hmm seems like you haven't uploaded a file yet..."
            : "You've got some data! Select a title from the list and I'll display it here for you! "}
        </p>
      </Box>
    )

  return (
    <Container>
      <Grid2 container columnSpacing={2} rowSpacing={3} marginBlock={3}>
        {moviesFilteredFirst[0] &&
          moviesFilteredFirst.map((movieName) =>
            movies.map((movieData) => {
              if (movieData?.title.includes(movieName)) {
                console.log('Data Im supposed to post', movieData)
                buttonSaveState &&
                  axios
                    .post(
                      'https://jsonplaceholder.typicode.com/posts',
                      movieData,
                      {
                        headers: {
                          'Content-type': 'application/json; charset=UTF-8',
                        },
                      }
                    )
                    .then((res) => console.log('posted', res))
                setButtonSaveState((saveButton) => false)
                return (
                  <Grid2 key={movieData.id} item xs={6} sm={6} md={4} lg={2.2}>
                    <MovieCard key={movieData.id} movie={movieData} />
                  </Grid2>
                )
              }
            })
          )}
      </Grid2>
    </Container>
  )
}

const styles = {
  alertBox: {
    height: '100vh',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
}
