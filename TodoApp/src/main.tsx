import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { theme } from './theme'
import { ThemeProvider } from '@mui/material/styles'
import { Router } from './router'
import { Provider } from 'react-redux'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </Provider>
  </StrictMode>
)
