import { Box, styled } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Toast from './components/shared/toast/toast'

const Thing = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100%',
  overflow: 'visible',
  paddingLeft: theme.spacing(10),
  paddingRight: theme.spacing(10),
  paddingBottom: theme.spacing(2),
  marginTop: theme.spacing(15)
}))

const GeneralPageContent = styled(Box)(() => ({
  display: 'flex',
  width: '100%',
  overflow: 'hidden',
  boxSizing: 'border-box',
}))

const GeneralLayoutContainer = () => {
  return (
    <Thing>
      <Toast />
      <GeneralPageContent>
        <Outlet />
      </GeneralPageContent>
    </Thing>
  )
}

export default GeneralLayoutContainer
