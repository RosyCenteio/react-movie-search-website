import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Player from './pages/Player/Player';
import Home from './pages/Home/Home';

function App() {

  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path="/" element = {<Home />}></Route>
        <Route path=":id" element = {<Player />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
