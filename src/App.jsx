import logo from './logo.svg'
import './App.css'
import ColorButton from './components/ColorButton';
import CountButton from './components/CountButton';



function App({ prop1 }) {
  return (
    <div className="App">
      <header className="App-header">
        {prop1}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello 
        </p>
        <p>
          <CountButton/>
          <ColorButton />
        </p>
        {/* <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p> */}
      </header>
    </div>
  )
}

export default App
