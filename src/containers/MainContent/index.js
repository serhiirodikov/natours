import { SectionAbout } from "../SectionAbout";
import { SectionFeatures } from "../SectionFeatures";
import { SectionTours } from "../SectionTours";
import { SectionStories } from "../SectionStories";
import { SectionBook } from "../SectionBook";

export const MainContent = ({ setSsOpenPopUp, refs, value }) => {
  return (
    <main>
      <SectionAbout refs={refs} value={value} />
      <SectionFeatures refs={refs} value={value} />
      <SectionTours refs={refs} value={value} setSsOpenPopUp={setSsOpenPopUp} />
      <SectionStories refs={refs} value={value} />
      <SectionBook refs={refs} value={value} />
    </main>
  );
};
