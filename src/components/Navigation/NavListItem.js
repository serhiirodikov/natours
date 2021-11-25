export const NavListItem = ({ title, id, handleClick }) => {
  return (
    <li>
      <a onClick={handleClick} name={id} href="/">
        {title}
      </a>
    </li>
  );
};
