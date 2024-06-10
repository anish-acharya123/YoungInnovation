import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./component/Homepage";
import Campaigns from "./component/Campaigns";
import Whoweare from "./component/Whoweare";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Homepage />
        <Campaigns />
        <Whoweare />
      </header>
    </div>
  );
}

export default App;
