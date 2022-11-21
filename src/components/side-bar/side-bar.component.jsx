import { Box } from '@mui/system'
import InputForm from '../input-form/input-form.component'
import MovieList from '../movie-list/movie-list.component'

export default function SideBar() {
  return (
    <Box position={'sticky'} top={0} bgcolor={'black'} height={'100vh'}>
      <MovieList />
      <InputForm />
    </Box>
  )
}
