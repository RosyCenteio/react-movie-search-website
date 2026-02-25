import logo from './logo.svg';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Player from './pages/Player/Player';
import Home from './pages/Home/Home';
import ParticlesBackground from './components/Particle';

function App() {

  return (
    <Router>
      <div className="App">
        <ParticlesBackground />
        <Routes>
          <Route path="/" element = {<Home />}></Route>
          <Route path=":id" element = {<Player />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
