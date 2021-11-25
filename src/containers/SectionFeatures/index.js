import { features } from "../../data/constants";

export const SectionFeatures = () => {
  return (
    <section id="feature" className="section-features">
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
  );
};
