import { Box } from '@mui/system'
import InputForm from '../input-form/input-form.component'
import MovieListContainer from '../movie-list/movie-list.component'
import { AppContext } from '../../contexts/app.context'
import { useContext } from 'react'
import SidebarAlert from '../alerts/sidebar-alert.component'


export default function SideBar() {
  const { movieNames } = useContext(AppContext)
  return (
    <Box position={'sticky'} top={0} bgcolor={'black'} height={'100vh'}>
      {movieNames?  <MovieListContainer /> : ''}
      {movieNames ? <InputForm /> : <SidebarAlert />}
    </Box>
  )
}
