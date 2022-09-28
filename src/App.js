// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='fs-1 text-danger'>
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
