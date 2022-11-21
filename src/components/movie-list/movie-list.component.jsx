// prettier-ignore
import { List,ListItem,ListItemButton,ListItemIcon,ListItemText,Checkbox,Box, } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

import { useContext, useEffect } from 'react'
import { AppContext } from '../../contexts/app.context'

export default function MovieList() {
  const { movieNames, moviesFilteredFirst, setMoviesFilteredFirst, movies } =
    useContext(AppContext)

  const handleToggle = (value) => () => {
    const currentIndex = moviesFilteredFirst.indexOf(value)
    const newChecked = [...moviesFilteredFirst]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setMoviesFilteredFirst(newChecked)
  }

  useEffect(() => {
    console.log('Fetched Filtered Movies', moviesFilteredFirst, movies)
  }, [moviesFilteredFirst, movies])

  if (!movieNames) {
    return (
      <Box sx={styles.listAlert}>
        <p style={{ marginInline: 30, textAlign: 'center' }}>
          Please upload a file containing movie titles by clicking the{' '}
          <strong>Uplodad</strong> button!
        </p>
      </Box>
    )
  }

  return (
    <Box sx={styles.listBox}>
      <List sx={styles.list}>
        {movieNames.map((value) => {
          const labelId = `checkbox-list-label-${value}`

          return (
            <ListItem key={value} sx={styles.listItem}>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense
                sx={{ borderRadius: '30px' }}
              >
                <ListItemIcon>
                  <Checkbox
                    sx={{ color: 'white' }}
                    icon={<RadioButtonUncheckedIcon />}
                    checkedIcon={<CheckCircleIcon sx={{ color: 'white' }} />}
                    edge="start"
                    checked={moviesFilteredFirst.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={value} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

const styles = {
  list: {
    boxSizing: 'border-box',
    width: '100%',
    height: '90%',
    paddingInline: '1vw',
    '&& .Mui-selected, && .Mui-selected:hover': {
      bgcolor: 'darkcyan',
      '&, & .MuiListItemIcon-root': {
        color: 'white',
      },
    },
    '& .MuiListItemButton-root:hover': {
      bgcolor: 'darkcyan',
      transition: 'linear, 500ms',
      '&, & .MuiListItemIcon-root': {
        color: 'white',
      },
    },
  },
  listAlert: {
    height: '80%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listBox: {
    height: '80%',
    overflowX: 'hidden',
    color: 'white',
    borderRadius: 0,
    boxShadow: 'none',
  },
  listItem: { marginTop: 0 },
}
