import React from "react";
import { MainTitle } from "../../components/MainTitle";
import image1 from "../../images/nat-1.jpg";
import image2 from "../../images/nat-2.jpg";
import image3 from "../../images/nat-3.jpg";
import { sectionAbout } from "../../data/constants";
import { ButtonText } from "../../components/ButtonText";

export const SectionAbout = ({ refs, value }) => {
  return (
    <section ref={value === "about" ? refs : null} className="section-about">
      <MainTitle title={"EXCITING TOURS FOR ADVENTUROUS PEOPLE"} />
      <div className="container grid grid--2--col">
        <div className="section-about--text">
          {sectionAbout.map(({ title, description }, index) => (
            <React.Fragment key={index}>
              <h1 className="heading-tertiary u-margin-bottom--small">
                {title}
              </h1>
              <p className="paragraph">{description}</p>
            </React.Fragment>
          ))}
          <ButtonText>Learn more &rarr;</ButtonText>
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
  );
};
