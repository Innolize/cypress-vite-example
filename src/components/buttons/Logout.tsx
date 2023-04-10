import React from 'react'
import Button from '@mui/material/Button'
import { AuthContext } from '../../providers/authProvider'

const LogoutButton = () => {
  const auth = React.useContext(AuthContext)
  return (
    <Button variant="outlined" onClick={() => auth.setAuth(null)}>
      Log out
    </Button>
  )
}

export default LogoutButton
