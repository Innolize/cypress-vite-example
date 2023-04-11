import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUp from './pages/sign-up'
import SignIn from './pages/sign-in'
import Pricing from './pages/pricing'
import Checkout from './pages/checkout'
import MainPage from './pages/main'
import { AuthProvider } from './providers/authProvider'
import { ThemeProvider, createTheme } from '@mui/material'
import { ROUTES } from './routes'
import ButtonAppBar from './components/header'

const defaultTheme = createTheme({ palette: { mode: 'dark' } })

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ThemeProvider theme={defaultTheme}>
        <ButtonAppBar />
          <BrowserRouter>
            <Routes>
              <Route path={ROUTES.HOME} Component={MainPage} />
              <Route path={ROUTES.SIGN_UP} Component={SignUp} />
              <Route path={ROUTES.SIGN_IN} Component={SignIn} />
              <Route path={ROUTES.PRICING} Component={Pricing} />
              <Route path={ROUTES.CHECKOUT} Component={Checkout} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>
    </div>
  )
}

export default App
