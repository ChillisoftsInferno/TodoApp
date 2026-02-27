import {
  Box,
  styled
} from '@mui/material'
import { Outlet } from 'react-router-dom'

const MasterPageContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  backgroundColor: theme.palette.secondary.main,
  top: 0,
  left: 0,
  position: 'fixed',
  width: '100%',
  height: '100vh',
}))

const MasterPage = () => {
  return (
    <MasterPageContainer>
      <Outlet />
    </MasterPageContainer>
  )
}

export default MasterPage
