import { Box } from "@mui/system";

export default function SidebarAlert(){
  return (
    <Box sx={styles.listAlert}>
      <p style={{ marginInline: 30, textAlign: 'center'}}>
        Please upload a file containing movie titles by clicking the{' '}
        <strong>Upload</strong> button!
      </p>
    </Box>
  )
}

const styles = {
  listAlert: {
    height: '80%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}