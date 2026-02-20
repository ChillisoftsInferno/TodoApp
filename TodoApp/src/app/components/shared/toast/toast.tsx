import { styled } from '@mui/material/styles'
import { ToastContainer } from 'react-toastify'

// WIP WIP WIP

const Toast = styled(ToastContainer)(({ theme }) => ({
  top: '3.5em !important',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  [theme.breakpoints.down('sm')]: {
    top: '4em !important',
    width: '400px',
    display: 'block',
  },

  //'.Toastify__toast': bodyStyle.base(),

  '.Toastify__toast--success': {
    backgroundColor: theme.palette.designColors.elevation.surface.success.subdued,
  },

  '.Toastify__toast--info': {
    backgroundColor: theme.palette.designColors.elevation.surface.info.subdued,
  },

  '.Toastify__toast--warning': {
    backgroundColor: theme.palette.designColors.elevation.surface.warning.subdued,
  },

  '.Toastify__toast--error': {
    backgroundColor: theme.palette.designColors.elevation.surface.critical.subdued,
  },

  '.Toastify__progress-bar--success': {
    backgroundColor: theme.palette.designColors.elevation.surface.success.default,
  },

  '.Toastify__progress-bar--info': {
    backgroundColor: theme.palette.designColors.elevation.surface.info.default,
  },

  '.Toastify__progress-bar--warn': {
    backgroundColor: theme.palette.designColors.elevation.surface.warning.default,
  },

  '.Toastify__progress-bar--error': {
    backgroundColor: theme.palette.designColors.elevation.surface.critical.default,
  },

  '.toast__close-button': {
    fontSize: '16px',
  },
}))

export default Toast
