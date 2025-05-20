import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import CreatePage from './pages/CreatePage'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import { CustomThemeProvider } from './contexts/themeContext'

function App() {

  return (
    <CustomThemeProvider> 
      <Box minH={'100vh'} bgcolor={"#13002c"}>
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/Create' element={<CreatePage/>}/>
        </Routes>
      </Box>   
     </CustomThemeProvider>
  )
}

export default App
