import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { Router } from './router'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme} defaultMode="light">
      <Router />
    </ThemeProvider>
  </StrictMode>
)
