export const ButtonMain = ({
  children,
  color = "green",
  animated = false,
  ...rest
}) => (
  <button
    className={`btn btn--${color} ${animated ? "btn--animated" : ""}`}
    {...rest}
  >
    {children}
  </button>
);
