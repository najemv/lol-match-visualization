import { Routes, Route, Router, BrowserRouter } from 'react-router-dom';
import './App.css';
import LandingPage from './LandingPage/LandingPage';
import MatchPage from './MatchPage/MatchPage';
import PlayerPage from './PlayerPage/PlayerPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        Hello router
        <Route path='/' element={<LandingPage />} />
        <Route path='/player' element={<PlayerPage />} />
        <Route path='/match' element={<MatchPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
