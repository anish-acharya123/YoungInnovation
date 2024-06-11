import React, { useEffect } from "react";
import "./App.css";
import Homepage from "./component/Homepage";
import Campaigns from "./component/Campaigns";
import Whoweare from "./component/Whoweare";
import Swipe from "./component/Swipe";
import News from "./component/News";
import Resources from "./component/Resources";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <Homepage />
      <Campaigns />
      <Whoweare />
      <Swipe />
      <News />
      <Resources />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
