import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import FormAdd from './components/FormAdd'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>} exact/>
          <Route path='/FormAdd' element={<FormAdd/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
