import { BrowserRouter } from 'react-router-dom';

import { Route, Routes } from "react-router";

import Navbar from '../Components/Navbar/Navbar';
import LandingPage from './LandingPage/LandingPage';
import MatchPage from './MatchPage/MatchPage';
import SummonerPage from './SummonerPage/SummonerPage';
import InfoPage from './InfoPage/InfoPage';

function AppRouter() {
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/summoner/:name' element={<SummonerPage />} />
        <Route path='/match/:matchId' element={<MatchPage />} />
        <Route path='*' element={<InfoPage text='404 Page Not Found'/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
