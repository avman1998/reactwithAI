import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <ul className="flex gap-5 ">
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/about">
          {" "}
          <li>About</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
