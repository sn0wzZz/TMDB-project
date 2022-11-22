import { Button } from '@mui/material'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import UploadRoundedIcon from '@mui/icons-material/UploadRounded'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded'

export default function InputButton() {
  const { moviesFilteredFirst, movieNames, setButtonSaveState } =
    useContext(AppContext)

  const buttonIsUsable = !movieNames || moviesFilteredFirst[0] ? false : true
  const buttonClicked = () =>
    !moviesFilteredFirst[0]
      ? console.log('hi')
      : setButtonSaveState((saveButton) => true)
  const buttonIcon = !movieNames ? (
    <UploadRoundedIcon fontSize="large" />
  ) : (
    <SaveRoundedIcon fontSize="large" />
  )
  const buttonText = !movieNames ? 'Upload' : 'Save'

  return (
    <Button
      sx={styles.uploadButton}
      className={'input-button'}
      variant="raised"
      component="span"
      disabled={buttonIsUsable}
      onClick={buttonClicked}
      size={'large'}
    >
      {buttonIcon} {buttonText}
    </Button>
  )
}

const styles = {
  uploadButton: {
    bgcolor: 'darkcyan',
    borderRadius: '30px',
    padding: '.4em 1em',
    ':hover': {
      backgroundColor: '#00b1b1',
      transform: 'scale(1.05)',
      transition: 'transform 350ms',
    },
    ':active': {
      boxShadow: 'none',
      backgroundColor: 'cyan',
    },
    fontWeight: 'bold',
  },
}
