// prettier-ignore
import {Box,CssBaseline, Typography, SwipeableDrawer } from '@mui/material'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import { useState } from 'react'
import InputButton from '../input-button/input-button.component'
import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/app.context'
import useWindowDimensions from '../../hooks/useWindowDimensions'

import SidebarAlert from '../alerts/sidebar-alert.component'
import MovieList from '../movie-list/movie-list.component'

const drawerBleeding = 55

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor:'black',
}))

const Puller = styled(Box)(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: 'gray',
  borderRadius: 3,
  position: 'absolute',
  top: 10,
  left: 'calc(50% - 15px)',
}))



export default function MovieListContainer(props) {
  const { movieNames, moviesFilteredFirst, movies } =
    useContext(AppContext)
  const [open, setOpen] = useState(false)
  const {width} = useWindowDimensions()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }


  useEffect(() => {
    console.log('Fetched Filtered Movies', moviesFilteredFirst, movies)
  }, [moviesFilteredFirst, movies])

  if (!movieNames && width>600) {
    return <SidebarAlert />
  }

  if (width<600)
    return (
      <Box>
        <CssBaseline />
        <Global
          styles={{
            '.MuiDrawer-root > .MuiPaper-root': {
              height: `calc(60% - ${drawerBleeding}px)`,
              overflow: 'visible',
            },
          }}
        />
        <SwipeableDrawer
          anchor="bottom"
          open={open}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          swipeAreaWidth={drawerBleeding}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              position: 'absolute',
              top: -drawerBleeding,
              borderTopLeftRadius: '30px',
              borderTopRightRadius: '30px',
              visibility: 'visible',
              right: 0,
              left: 0,
            }}
          >
            <Puller />
            <Typography
              onClick={toggleDrawer(true)}
              sx={{ p: 2, color: 'white' }}
            >
              {movieNames ? movieNames.length + ' Titles' : '0 Titles'}
            </Typography>
          </StyledBox>
          <StyledBox
            sx={{
              px: 2,
              pb: 0,
              height: '100%',
              overflow: 'auto',
            }}
          >
            {!movieNames ? <SidebarAlert /> : <MovieList />}
            <Box
              sx={{ display: 'flex', justifyContent: 'center', color: 'white' }}
            >
              {movieNames ? <InputButton /> : ''}
            </Box>
          </StyledBox>
        </SwipeableDrawer>
      </Box>
    )

      return <MovieList />
}
