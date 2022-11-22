// prettier-ignore
import { Card, CardContent, Typography, CardMedia, useTheme, ThemeProvider,  } from '@mui/material'
import CardActionArea from '@mui/material/CardActionArea'

export default function MovieCard({ movie }) {
  const theme = useTheme()

  const styles = {
    card: {
      width: '10vw',
      height: '10wv',
      maxHeight: '380px',
      maxWidth: '230px',
      minWidth: '160px',
      bgcolor: 'darkcyan',
      color: 'white',
      borderRadius: '30px',
    },
    cardMedia: {},
    cardTitle: {
      position: 'absolute',
      bottom: 32,
      left: 0,
      background: 'linear-gradient(to top, rgba(0,0,0,.9) 70%,transparent)',
      width: '100%',
      height: '23%',
      padding: '10px',
      [theme.breakpoints.down('lg')]: {
        fontSize: '.9rem',
        height: '26%',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '.95rem',
        height: '28%',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '.9rem',
        height: '34%',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '.9rem',
        height: '20%',
      },
    },
    cardLanguage: {
      position: 'absolute',
      top: 15,
      right: 15,
      backgroundColor: 'white',
      // width: '.8em',
      // height: '.7em',
      padding: '.2em',
      borderRadius: '5px',
      color: 'black',
      fontWeight: 'bold',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: '.7rem',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '.8rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '.7rem',
      },
    },
    cardYear: {
      position: 'absolute',
      display: 'flex',
      bottom: '1em',
      left: '1em',
      backgroundColor: 'cyan',
      padding: '.8em',
      borderRadius: '30px',
      color: 'black',
      fontWeight: 'bold',
      textAlign: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: '.7rem',
        bottom: '1.2em',
        left: '.7em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '.8rem',
        bottom: '1em',
        left: '.7em',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '.7rem',
        bottom: '1.2em',
        left: '.7em',
      },
    },
    cardVotes: {
      position: 'absolute',
      width: '2.5em',
      height: '2.5em',
      bgcolor: 'cyan',
      borderRadius: '30px',
      bottom: '.3em',
      right: '.5em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down('lg')]: {
        fontSize: '1.2rem',
        bottom: '.6em',
        right: '.3em',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '1.2rem',
        bottom: '.6em',
        right: '.3em',
      },
      [theme.breakpoints.up('lg')]: {
        fontSize: '1.4rem',
        bottom: '.4em',
        right: '.3em',
      },
    },
  }

  const { title, vote_average, poster_path, original_language, release_date } =
    movie

  return (
    <ThemeProvider theme={theme}>
      <Card sx={styles.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            sx={styles.cardMedia}
            image={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt="image"
          />
          <CardContent>
            <Typography sx={styles.cardTitle} variant="h6" component="div">
              {title}
            </Typography>
            <Typography
              sx={styles.cardLanguage}
              variant="body2"
              component="div"
            >
              {original_language.toUpperCase()}
            </Typography>
            <Typography sx={styles.cardYear} variant="body2" component="div">
              Year: {release_date.slice(0, 4)}
            </Typography>
            <Typography
              sx={styles.cardVotes}
              variant="h5"
              color="black"
              fontWeight={'bold'}
            >
              {vote_average}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </ThemeProvider>
  )
}
