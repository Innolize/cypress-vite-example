import * as React from 'react'
import Box from '@mui/material/Box'
import { AuthContext } from '../../providers/authProvider'
import LogoutButton from '../buttons/Logout'
import { Button } from '@mui/material'

export default function ButtonAppBar() {
  const auth = React.useContext(AuthContext)
  return (
    <Box
      sx={{ flexGrow: 1 }}
      display={'flex'}
      flexDirection={'row-reverse'}
      padding={'0px 25px'}
    >
      {auth.user?.email ? (
        <LogoutButton></LogoutButton>
      ) : (
        <Button variant="text" href="/signin">
          Sign in
        </Button>
      )}
    </Box>
  )
}
