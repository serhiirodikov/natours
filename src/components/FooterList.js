export const FooterList = ({ item }) => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <li>
      <a onClick={handleClick} href="/">
        {item}
      </a>
    </li>
  );
};
