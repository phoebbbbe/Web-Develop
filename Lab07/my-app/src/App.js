import logo from './logo.svg';
import './App.css';
import Title from './components/title';
import Mysidebar from './components/sidebar';
import Main from './components/main';

function App() {
  return (
    <div className="App">
      <Title/>
      <div style={{ display: 'flex', height: '100%' }}>
        <Mysidebar/>
        <Main/>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello class!
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
    
  );
}

export default App;