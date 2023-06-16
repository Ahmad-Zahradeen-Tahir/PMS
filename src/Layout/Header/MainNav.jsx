import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu, GiPowerButton } from 'react-icons/gi'
import { BsBellFill } from 'react-icons/bs'
import classes from "./MainNav.module.css";

const MainNav = () => {
  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.pms}>
          <span>PMS</span>
          <button><GiHamburgerMenu/></button>
        </div>
        <div className={classes['nav-title']}>
          <span>Dashboard</span>
        </div>
        <div className={classes['nav-other']}>
          <button><BsBellFill/></button>
          <Link to='auth'><GiPowerButton/></Link>
        </div>
      </nav>
    </>
  );
};

export default MainNav;