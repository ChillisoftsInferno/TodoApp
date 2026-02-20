import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router'

const GeneralRouteContent = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  boxSizing: 'border-box',
}))

const GeneralRoute = () => {
  return (
    <Outlet />
  )
}

export default GeneralRoute
