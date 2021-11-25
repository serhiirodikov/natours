import { MainTitle } from "../../components/MainTitle";
import { tours } from "../../data/constants";
import { ButtonMain } from "../../components/ButtonMain";

export const SectionTours = ({ setSsOpenPopUp }) => {
  return (
    <section id="tours" className="section-tours">
      <MainTitle title={"MOST POPULAR TOURS"} />
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
                <ButtonMain color="white" onClick={() => setSsOpenPopUp(true)}>
                  book now!
                </ButtonMain>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="u-center-text u-margin-top-huge">
        <ButtonMain>Discover all tours</ButtonMain>
      </div>
    </section>
  );
};
