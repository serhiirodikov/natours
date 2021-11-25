import { bookingDetails } from "../data/constants";

export const Popup = ({ isOpenPopUp, setSsOpenPopUp }) => {
  if (!isOpenPopUp) {
    return null;
  }

  return (
    <div className="popup">
      {bookingDetails.map(
        ({ firstImg, secondImg, title, subTitle, description }, index) => (
          <div key={index} className="popup__content">
            <div className="popup__left">
              <img src={firstImg} alt="img" />
              <img src={secondImg} alt="img" />
            </div>
            <div className="popup__right">
              <h2 className="heading-secondary u-margin-bottom--small">
                {title}
              </h2>
              <h3 className="heading-tertiary u-margin-bottom--small">
                {subTitle}
              </h3>
              <p className="popup__text">{description}</p>
              <button className="btn btn--green u-fit-content">book now</button>
              <button
                onClick={() => setSsOpenPopUp(false)}
                className="popup__icon--box"
              >
                <span className="popup__icon" />
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};
