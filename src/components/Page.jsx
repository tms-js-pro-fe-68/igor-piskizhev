import { createContext, useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import api from '../api'

const Context = createContext()

export const usePageContext = () => useContext(Context)

export default function Page({ sx, ...otherProps }) {
    const [isIni, setIsIni] = useState(false);

    const navigate = useNavigate()
    const navigateToLogin = () => navigate('/login', { replace: true })

  useEffect(() => {
    if (sessionStorage.token){
        api.setup(sessionStorage.token)
        setIsIni(true)
    }
    else {
     navigateToLogin()
    }
  }, [])
    console.log(`isInitialized   ${isIni}`);
  return (
    <Context.Provider value={{isIni}}>
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        ...sx,
      }}
      {...otherProps}
    />
    </Context.Provider>
  )
}