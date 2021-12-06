import React, { useState } from 'react'
import Chat from './components/Chat'
import Login from './components/Login'
import Navbar from './components/Navbar'
import GlobalStyles from './globalStyles'
import { App as AppCom } from './globalStyles'
import { ThemeProvider } from 'styled-components'

const theme = {
    navHeight: '56px',
    formHeight: '50px',
    primary: '#0B93F6'
}

const App = () => {

    const [user, setUser] = useState(false)

    return (
            <ThemeProvider theme={theme}>
                <AppCom>
                    <GlobalStyles />
                    <Navbar user={user} setUser={setUser} />  
                    {user ? <Chat user={user} />:<Login setUser={setUser} />}
                </AppCom>
            </ThemeProvider>        
    )
}

export default App
