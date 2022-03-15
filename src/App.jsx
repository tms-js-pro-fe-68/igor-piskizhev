import logo from './logo.svg'
import './App.css'
import ColorButton from './components/ColorButton';
import CountButton from './components/CountButton';
import GetStat from './components/DataFetch';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello 
        </p>
        <CountButton/>
        <ColorButton/>
        <GetStat/>

        
      </header>
    </div>
  )
}

export default App
