export const NavListItem = ({ title, id, setIsOpen }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(false);

    const scrollToItem = document.querySelector(
      e.currentTarget.getAttribute("href")
    );

    setTimeout(
      () =>
        scrollToItem.scrollIntoView({
          behavior: "smooth",
        }),
      200
    );
  };

  return (
    <li>
      <a onClick={handleClick} href={id}>
        {title}
      </a>
    </li>
  );
};
