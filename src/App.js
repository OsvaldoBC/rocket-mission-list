import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/RocketsContainer';
import Missions from './components/Missions';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/missions" element={<Missions />} />
            <Route exact path="/rocketscontainer" element={<Rockets />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
