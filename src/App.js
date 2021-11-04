import "./App.scss";
import logo from "../src/images/logo-white.png";
import image1 from "../src/images/nat-1.jpg";
import image2 from "../src/images/nat-2.jpg";
import image3 from "../src/images/nat-3.jpg";

function App() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img src={logo} alt="logo" />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">OUTDOORS</span>
            <span className="heading-primary--sub">IS WHERE LIFE HAPPENS</span>
          </h1>
          <button className="btn btn--white btn--animated">
            discover our tours
          </button>
        </div>
      </header>
      <main>
        <section className="section-about">
          <div className="center-text margin-bottom--big">
            <h1 className="heading-secondary">
              EXCITING TOURS FOR ADVENTUROUS PEOPLE
            </h1>
          </div>
          <div className="container grid grid--2--col">
            <div>
              <h1 className="heading-tertiary margin-bottom--small">
                YOU'RE GOING TO FALL IN LOVE WITH NATURE
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
              <h1 className="heading-tertiary margin-bottom--small">
                YOU'RE GOING TO FALL IN LOVE WITH NATURE
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
            <div className="section-about--images">
              <img src={image1} alt="img1" />
              <img src={image2} alt="img2" />
              <img src={image3} alt="img3" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
