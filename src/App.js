import "../src/sass/main.scss";
import { useState } from "react";
import { Navigation } from "./containers/Navigation";
import { Header } from "./components/Header";
import { MainContent } from "./containers/MainContent";
import { Footer } from "./containers/Footer";
import { Popup } from "./components/Popup";

function App() {
  const [isOpenPopUp, setSsOpenPopUp] = useState(false);

  return (
    <>
      <Navigation />
      <Header />
      <MainContent setSsOpenPopUp={setSsOpenPopUp} />
      <Footer />
      <Popup isOpenPopUp={isOpenPopUp} setSsOpenPopUp={setSsOpenPopUp} />
    </>
  );
}

export default App;
