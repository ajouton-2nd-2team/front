
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './Component/Main';
import { clubs } from './infor/clubs';
import ClubInfo from "./Component/ClubInfo";
import Club from "./Component/Club";
import { ajouclubs } from './infor/ajouclubs';
import Login from './Component/Login';
import Concert from './Component/Concert';
import Announce from './Component/Announce';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Announce" element={<Announce />} />
          <Route path="/concert" element={<Concert />} />
          <Route path="/clubInfo" element={<ClubInfo />} />
          {clubs.map((club, index) => (
            <Route key={index} path={club.href} element={<Club club={club} />} />
          ))}
          {ajouclubs.map((club, index) => (
            <Route key={index} path={club.href} element={<Club club={club} />} />
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
