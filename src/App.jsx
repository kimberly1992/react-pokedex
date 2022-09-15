import './App.css';
import Pokecard from './components/Pokecard'
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="container d-flex flex-wrap">
        <div className="row">
          <div className="col-12 col-md-4"> 
            <Pokecard id="1"/>
          </div>
          <div className="col-12 col-md-4"> 
            <Pokecard id="2"/>
          </div>
          <div className="col-12 col-md-4"> 
            <Pokecard id="3"/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
