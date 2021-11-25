import { SectionAbout } from "../SectionAbout";
import { SectionFeatures } from "../SectionFeatures";
import { SectionTours } from "../SectionTours";
import { SectionStories } from "../SectionStories";
import { SectionBook } from "../SectionBook";

export const MainContent = ({ setSsOpenPopUp }) => {
  return (
    <main>
      <SectionAbout />
      <SectionFeatures />
      <SectionTours setSsOpenPopUp={setSsOpenPopUp} />
      <SectionStories />
      <SectionBook />
    </main>
  );
};
