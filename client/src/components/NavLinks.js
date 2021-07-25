import NavLink from './NavLink'
import mercury from "../assets/me.svg";
import venus from "../assets/v.svg";
import earth from "../assets/e.svg";
import mars from "../assets/ma.svg";
import jupiter from "../assets/j.svg";
import saturn from "../assets/s.svg";
import uranus from "../assets/u.svg";
import neptune from "../assets/n.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
// import {   useContext } from "react";
// import AppContext from "../App";

const NavLinks = (  ) => {
  // const [ hamburgermenu, toggleHamburgerMenu ] = useContext(AppContext);
  // const [hamburgermenu, setHamburgerMenu] = useState(false);
  // const toggleHamburgerMenu = () => {
  //   hamburgermenu ? setHamburgerMenu(false) : setHamburgerMenu(true);
  // };
  const [hamburgermenu, setHamburgerMenu] = useState(false);

  const toggleHamburgerMenu = () => {
    hamburgermenu ? setHamburgerMenu(false) : setHamburgerMenu(true);
  };

  return (
    <div>
      <Link to="/">
        <NavLink
          image={mercury}
          title="mercury"
          onClick={() => toggleHamburgerMenu(!toggleHamburgerMenu)}
        />{" "}
      </Link>
      <Link to="/venus">
        {" "}
        <NavLink image={venus} title="venus" />
      </Link>{" "}
      <Link to="earth">
        {" "}
        <NavLink image={earth} title="earth" />
      </Link>{" "}
      <Link to="/mars">
        {" "}
        <NavLink image={mars} title=" mars" />
      </Link>{" "}
      <Link to="/jupiter">
        {" "}
        <NavLink image={jupiter} title="jupiter" />
      </Link>{" "}
      <Link to="/saturn">
        {" "}
        <NavLink image={saturn} title="saturn" />
      </Link>{" "}
      <Link to="/uranus">
        {" "}
        <NavLink image={uranus} title="uranus" />
      </Link>
      <Link to="/neptune">
        {" "}
        <NavLink image={neptune} title="neptune" />
      </Link>
    </div>
  );
};

export default NavLinks