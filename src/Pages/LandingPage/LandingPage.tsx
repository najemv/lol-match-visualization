import { useState } from "react";
import { Link } from "react-router-dom";
import { AppSettings, loadSettings, saveSettings } from "../../Utils/settings";
import "./LandingPage.css";

const LandingPage = () => {
  const [saved, setSaved] = useState(false);
  
  const formSubmit = (e: any) => {
    e.preventDefault();
    setSaved(true);

    const settings: AppSettings = {
      apiKey: e.target[0].value,
      usePreview: e.target[1].checked
    };

    saveSettings(settings);
  };

  const settings = loadSettings();
  return (
    <div className="landing-page__content">
      <h1>Welcome</h1>
      <p>
        This project aims to visualize data from Riot Games public API.
        You can see player's kills throughout the game to explore new connections
        and trends for individual players. You can also insight the most important
        match statistics.
      </p>
      <p>To try out the app, you have two options:</p>
      <ol>
        <li>
          Check the "Use example local data" in settings below.
          This will load local data that contains one example player
          with one example match, that enables you to explore this app
          without need to have api key. You can use example links below.
        </li>
        <li>
          If you have Riot Games account, you can go to <a href="https://developer.riotgames.com/">developer site</a> and
          generate your own API key, that you enter in the settings below.
          This enables the app to use Riot Games API, so you can access the data
          about arbitrary player or match.
        </li>
      </ol>
      <h2>Example links:</h2>
      <p><Link to={"match/EUN1_3256227670?region=EUNE"}>Example match</Link></p>
      <p><Link to={"summoner/Freeze?region=EUNE"}>Example Player</Link></p>
      
      <section>
        <div className="settings">
          <h2>Settings</h2>
          <form onSubmit={formSubmit}>
            <div className="form-row">
              <label htmlFor="apiKey">Riot Games API key:</label>
              <input type="text" id="apiKey" defaultValue={settings.apiKey}/>
            </div>
            <div className="form-row flex">
              <label htmlFor="usePreview">Use example local data</label>
              <input type="checkbox" id="usePreview" defaultChecked={settings.usePreview} />
            </div>
            <div className="form-row flex">
              <input type="submit" value="Save"/>
              {saved && <img src="/icons/ok.png" alt="Ok" />}
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;