import { Box, GlobalStyles } from '@mui/material'
import Grid2 from '@mui/material/Unstable_Grid2'
import SideBar from '../side-bar/side-bar.component'
import CardList from '../movie-card-list/movie-card-list.component'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import MovieList from '../movie-list-container/movie-list-container.component'

export default function MainContainer() {
  const { width } = useWindowDimensions()
  return (
    <Box>
      <GlobalStyles styles={styles} />
      <Box>
        <Grid2 container bgcolor={'#0f0f0f'}>
          <Grid2 item xs={12} sm={4} md={4} lg={3}>
            {/* <SideBar /> */}
            {width > 600 ? <SideBar /> : <MovieList />}
          </Grid2>
          <Grid2
            item
            xs={12}
            sm={8}
            md={8}
            lg={9}
            sx={{ diplay: 'flex', justifyContent: 'center' }}
          >
            <Box sx={{ marginInline: 'auto' }}>
              <CardList />
            </Box>
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  )
}

const styles = {
  '::-webkit-scrollbar': {
    width: '1.1em',
    background: 'black',
  },
  '::-webkit-scrollbar-track': {
    backgroundColor: '#1f1f1f',
    borderRadius: '30px',
  },
  '::-webkit-scrollbar-thumb': {
    backgroundColor: 'darkcyan',
    outline: 'none',
    borderRadius: '30px',
  },
}
