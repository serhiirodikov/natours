import "../src/sass/main.scss";
import { useEffect, useRef, useState } from "react";
import { Navigation } from "./containers/Navigation";
import { Header } from "./components/Header";
import { MainContent } from "./containers/MainContent";
import { Footer } from "./containers/Footer";
import { Popup } from "./components/Popup";

function App() {
  const [isOpenPopUp, setSsOpenPopUp] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef();
  const [value, setValue] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    setValue(e.currentTarget.name);
    setIsOpen(false);
  };

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [value]);

  return (
    <>
      <Navigation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClick={handleClick}
      />
      <Header setValue={setValue} />
      <MainContent setSsOpenPopUp={setSsOpenPopUp} refs={ref} value={value} />
      <Footer />
      <Popup isOpenPopUp={isOpenPopUp} setSsOpenPopUp={setSsOpenPopUp} />
    </>
  );
}

export default App;
