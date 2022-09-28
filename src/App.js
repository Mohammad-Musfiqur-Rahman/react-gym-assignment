import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Component/Header/Header';
import Main from './Component/Main/Main';
import Qustions from './Component/Qustions/Qustions';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Qustions></Qustions>
    </div>
  );
}

export default App;
