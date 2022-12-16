// prettier-ignore
import { List,ListItem,ListItemButton,ListItemIcon,ListItemText,Checkbox,Box, } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'

export default function MovieList() {
  const { movieNames, moviesFilteredFirst, setMoviesFilteredFirst } = useContext(AppContext)

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
  return (
    <Box sx={styles.listBox}>
      <List sx={styles.list}>
        {movieNames &&
          movieNames.map((value) => {
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
    zIndex: 999,
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
  listBox: {
    height: '80%',
    overflowX: 'hidden',
    color: 'white',
    borderRadius: 0,
    boxShadow: 'none',
  },
  listItem: { marginTop: 0 },
}
