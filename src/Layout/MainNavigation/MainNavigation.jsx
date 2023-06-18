import React from "react";
import classes from "./MainNavigation.module.css";
import { NavLink, useSearchParams } from "react-router-dom";

const MainNavigation = () => {
  const [searchParams] = useSearchParams();
  const signup = searchParams.get('mode') === 'signup'
  const login = searchParams.get('mode') === 'login'
  return (
    <nav className={classes.nav}>
      <span className={classes.pms}>PMS</span>
      <div>
        <NavLink
          className={({ isActive }) => (isActive ? classes.active : "")}
          to=""
        >
          Home
        </NavLink>
        <NavLink
          className={login ? classes.active : ""}
          to="auth?mode=login"
        >
          Login
        </NavLink>
        <NavLink
          className={signup ? classes.active : ""}
          to="auth?mode=signup"
        >
          Sign Up
        </NavLink>
      </div>
    </nav>
  );
};

export default MainNavigation;
