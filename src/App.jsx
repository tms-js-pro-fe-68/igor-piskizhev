import logo from './logoChack.png'
import './App.css'
import ColorButton from './components/ColorButton';
import CountButton from './components/CountButton';
import GetStat from './components/DataFetch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <GetStat/>
        <CountButton/>
        <ColorButton/>
      </header>
    </div>
  )
}

export default App
