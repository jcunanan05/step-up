const Burger = ({ expanded = false, onClick = () => {} }) => (
  <a
    role="button"
    className="navbar-burger"
    aria-label="menu"
    aria-expanded={`${expanded}`}
    onClick={onClick}
  >
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </a>
);

export default Burger;
