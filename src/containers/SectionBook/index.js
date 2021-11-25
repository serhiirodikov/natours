import { ButtonMain } from "../../components/ButtonMain";

export const SectionBook = () => {
  return (
    <section id="book" className="section-book">
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
              <ButtonMain>next step &rarr;</ButtonMain>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
