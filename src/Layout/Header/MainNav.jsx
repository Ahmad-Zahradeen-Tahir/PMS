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
          <GiHamburgerMenu/>
        </div>
        <div className={classes['nav-title']}>
          <span>Dashboard</span>
        </div>
        <div className={classes['nav-other']}>
          <BsBellFill/>
          <Link to='auth'><GiPowerButton/></Link>
        </div>
      </nav>
    </>
  );
};

export default MainNav;