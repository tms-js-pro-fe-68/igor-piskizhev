
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import FormAdd from './components/FormAdd'
 
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
}
)

function App() {

  return (
    <div className="App">
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/' element={<HomePage/>} exact/>
          <Route path='/FormAdd' element={<FormAdd/>}/>
        </Routes>
      </Router>
    </QueryClientProvider>
    </div>
  )
}

export default App
