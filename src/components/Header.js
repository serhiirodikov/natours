import logo from "../images/logo-white.png";
import { ButtonMain } from "./ButtonMain";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-box">
        <img src={logo} alt="logo" />
      </div>
      <div className="header__text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">OUTDOORS</span>
          <span className="heading-primary--sub">IS WHERE LIFE HAPPENS</span>
        </h1>
        <ButtonMain color="white" animated>
          discover our tours
        </ButtonMain>
      </div>
    </header>
  );
};
