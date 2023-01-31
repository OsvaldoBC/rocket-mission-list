import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Rockets from './components/RocketsContainer';
import Missions from './components/Missions';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Rockets />} />
            <Route exact path="/missions" element={<Missions />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
