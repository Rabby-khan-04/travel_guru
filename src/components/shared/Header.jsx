import PropTypes from "prop-types";
import logoWhite from "../../assets/images/logo_white.png";
import logoBlack from "../../assets/images/logo_black.png";
import { FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Header = ({ theme = "dark" }) => {
  const links = (
    <>
      <li>
        <NavLink to="/news">News</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );

  return (
    <header className={`py-10 ${theme === "light" && "-mb-[136px]"}`}>
      <nav className="container flex items-center gap-12">
        <figure className="grow">
          <Link to="/">
            <img
              className="h-14"
              src={theme === "dark" ? logoBlack : logoWhite}
              alt=""
            />
          </Link>
        </figure>

        {theme === "light" && (
          <div className="w-[370px]">
            <label className="input input-bordered flex items-center gap-3 border-white text-white bg-white/20">
              <FiSearch />
              <input
                type="text"
                className="grow placeholder:text-white placeholder:text-base placeholder:font-medium"
                placeholder="Search your Destination..."
              />
            </label>
          </div>
        )}

        <ul
          className={`font-montserrat font-medium flex items-center gap-12 ${
            theme === "dark" ? "text-black" : "text-white"
          }`}
        >
          {links}
        </ul>

        <div>
          <Link className="primary__btn" to="/login">
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

export default Header;
