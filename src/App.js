import "../src/sass/main.scss";
import logo from "../src/images/logo-white.png";
import image1 from "../src/images/nat-1.jpg";
import image2 from "../src/images/nat-2.jpg";
import image3 from "../src/images/nat-3.jpg";
import bgVideo from "../src/images/video.webm";
import { features, stories, tours } from "./data/constants";
import footerImage from "../src/images/logo-green-1x.png";

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
          <div className="u-center-text u-margin-bottom--big">
            <h1 className="heading-secondary">
              EXCITING TOURS FOR ADVENTUROUS PEOPLE
            </h1>
          </div>
          <div className="container grid grid--2--col">
            <div>
              <h1 className="heading-tertiary u-margin-bottom--small">
                YOU'RE GOING TO FALL IN LOVE WITH NATURE
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
              <h1 className="heading-tertiary u-margin-bottom--small">
                YOU'RE GOING TO FALL IN LOVE WITH NATURE
              </h1>
              <p className="paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
              <button className="btn-text">Learn more &rarr;</button>
            </div>
            <div>
              <div className="section-about--images">
                <img src={image1} alt="img1" />
                <img src={image2} alt="img2" />
                <img src={image3} alt="img3" />
              </div>
            </div>
          </div>
        </section>
        <section className="section-features">
          <div className="container grid grid--4--col">
            {features.map((feature, index) => (
              <div key={index} className="section-features--card">
                {feature.icon}
                <h3 className="heading-tertiary u-margin-bottom--small">
                  {feature.title}
                </h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
        <section className="section-tours">
          <h1 className="u-center-text heading-secondary u-margin-bottom--big">
            MOST POPULAR TOURS
          </h1>
          <div className="container grid grid--3--col">
            {tours.map((tour, index) => (
              <div className="card" key={index}>
                <div className="card__side card__side--front">
                  <div className="card--image" />
                  <h4 className="card--title">
                    <span>{tour.title}</span>
                  </h4>
                  <div className="card--body">
                    <ul>
                      {tour.list.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">only</p>
                      <p className="card__price-value">{`${tour.price}$`}</p>
                    </div>
                    <button className="btn btn--white">book now!</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="u-center-text u-margin-top-huge">
            <button className="btn btn--green u-center-text">
              Discover all tours
            </button>
          </div>
        </section>
        <section className="section-stories">
          <div className="bg-video">
            <video src={bgVideo} autoPlay muted loop />
          </div>
          <div className="u-center-text u-margin-bottom--big">
            <h2 className="heading-secondary">
              WE MAKE PEOPLE GENUINELY HAPPY
            </h2>
          </div>
          {stories.map((story, index) => (
            <div key={index} className="story-container">
              <div className="story">
                <figure className="story__shape">
                  <img src={story.image} alt={`story${index}`} />
                  <figcaption className="story__caption">
                    {story.author}
                  </figcaption>
                </figure>

                <div className="story__text">
                  <h3 className="heading-tertiary u-margin-bottom--small">
                    {story.title}
                  </h3>
                  <p>{story.description}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="container u-center-text">
            <button className="btn-text">Read all stories &rarr;</button>
          </div>
        </section>
        <section className="section-book">
          <div className="container">
            <div className="book">
              <div className="book__form">
                <form action="/">
                  <div className="u-margin-bottom--medium">
                    <h2 className="heading-secondary">START BOOKING NOW</h2>
                  </div>
                  <div className="form__group">
                    <input
                      className="form__input"
                      type="text"
                      id="name"
                      placeholder="Full name"
                      required
                    />
                    <label className="form__label" htmlFor="name">
                      Full name
                    </label>
                  </div>
                  <div className="form__group">
                    <input
                      className="form__input"
                      type="email"
                      id="email"
                      placeholder="Email address"
                      required
                    />
                    <label htmlFor="email" className="form__label">
                      Email address
                    </label>
                  </div>
                  <div className="form__radio u-margin-bottom--medium">
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        id="small"
                        name="size"
                        className="form__radio--input"
                      />
                      <label className="form__radio--label" htmlFor="small">
                        <span className="form__radio--btn" />
                        Small tour group
                      </label>
                    </div>
                    <div className="form__radio-group">
                      <input
                        type="radio"
                        id="large"
                        name="size"
                        className="form__radio--input"
                      />
                      <label className="form__radio--label" htmlFor="large">
                        <span className="form__radio--btn" />
                        Large tour group
                      </label>
                    </div>
                  </div>
                  <button className="btn btn--green">next step &rarr;</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__logo--box">
          <img src={footerImage} alt="footer_image" />
        </div>
        <div className="container">
          <div className="grid grid--2--col">
            <div className="footer__navigation ">
              <ul className="footer__list">
                <li>
                  <a href="/">COMPANY</a>
                </li>
                <li>
                  <a href="/">CONTACT US</a>
                </li>
                <li>
                  <a href="/">CARRERS</a>
                </li>
                <li>
                  <a href="/">PRIVACY POLICY</a>
                </li>
                <li>
                  <a href="/">TERMS</a>
                </li>
              </ul>
            </div>
            <div className="footer__copy">
              <p>
                Built by JONAS SCHMEDTMANN for his online course ADVANCED CSS
                AND SASS. Copyright © by Jonas Schmedtmann. You are 100% allowed
                to use this webpage for both personal and commercial use, but
                NOT to claim it as your own design. A credit to the original
                author, Jonas Schmedtmann, is of course highly appreciated!
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
