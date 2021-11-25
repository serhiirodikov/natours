import footerImage from "../../images/logo-green-1x.png";
import { FooterList } from "../../components/FooterList";
import { footerList } from "../../data/constants";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo--box">
        <img src={footerImage} alt="footer_image" />
      </div>
      <div className="container">
        <div className="grid grid--2--col">
          <div className="footer__navigation ">
            <ul className="footer__list">
              {footerList.map(({ title }, index) => (
                <FooterList key={index} item={title} />
              ))}
            </ul>
          </div>
          <div className="footer__copy">
            <p>
              Designed by JONAS SCHMEDTMANN.
              <br /> Developed by Me:)
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
