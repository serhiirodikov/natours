import bgVideo from "../../images/video.webm";
import { MainTitle } from "../../components/MainTitle";
import { stories } from "../../data/constants";
import { ButtonText } from "../../components/ButtonText";

export const SectionStories = ({ refs, value }) => {
  return (
    <section
      ref={value === "stories" ? refs : null}
      className="section-stories"
    >
      <div className="bg-video">
        <video src={bgVideo} autoPlay muted loop />
      </div>
      <MainTitle title={"WE MAKE PEOPLE GENUINELY HAPPY"} />
      {stories.map((story, index) => (
        <div key={index} className="story-container">
          <div className="story">
            <figure className="story__shape">
              <img src={story.image} alt={`story${index}`} />
              <figcaption className="story__caption">{story.author}</figcaption>
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
        <ButtonText>Read all stories &rarr;</ButtonText>
      </div>
    </section>
  );
};
