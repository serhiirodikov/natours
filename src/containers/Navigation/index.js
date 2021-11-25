import { useState } from "react";
import { NavListItem } from "../../components/Navigation/NavListItem";
import { navList } from "../../data/constants";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navigation">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`navigation__btn ${isOpen ? "open" : ""}`}
      >
        <span className="navigation__icon" />
      </button>
      <div className={`navigation__background ${isOpen ? "open" : ""}`} />
      <nav className="navigation__nav">
        <ul className="navigation__list">
          {navList.map(({ title, id }, index) => (
            <NavListItem
              key={index}
              title={title}
              id={id}
              setIsOpen={setIsOpen}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
