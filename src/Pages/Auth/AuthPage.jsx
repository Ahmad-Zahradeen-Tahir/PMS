import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import classes from "./AuthPage.module.css";
import Input from "../../Components/Input/Input";
import { GoMail } from "react-icons/go";
import { VscKey } from "react-icons/vsc";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import LightButton from "../../Components/Button/LightButton";
import DarkButton from "../../Components/Button/DarkButton";
import { Fade } from "react-reveal";

const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const hasAccount = searchParams.get('mode') === 'signup'

  const loginHandler = (e) => {
    e.preventDefault();
  };

  const signupHandler = (e) => {
    e.preventDefault();
  };

  const Login = (
    <main className={classes.main}>
      <Fade big right>
        <section className={classes.left}>
          <h1>Sign in to PMS</h1>
          <form onSubmit={loginHandler}>
            <Input placeholder="e-mail" type="email" id="email">
              <GoMail />
            </Input>
            <Input placeholder="Password" id="password" type="password">
              <VscKey />
            </Input>
            <Link to="newpasskey">Forgot Password?</Link>
            <Link to='/pms/dashboard'><DarkButton type="submit" name="sign in" /></Link>
          </form>
        </section>
      </Fade>
      <Fade big left>
        <section className={classes.right}>
          <h1>Hello!</h1>
          <p>
            Don't have an account?
            <br />
            Start your journey with us
          </p>
          <Link to={`?mode=signup`}>
          <LightButton
            name="Sign Up"
          />
          </Link>
        </section>
      </Fade>
    </main>
  );

  const Signup = (
    <main className={classes.signUpMain}>
      <Fade big right>
        <section className={classes.signUpLeft}>
          <h1>Hello!</h1>
          <p>
            Already have an account?
            <br />
            Continue your journey with us
          </p>
          <Link to={`?mode=login`}>
          <LightButton
            name="Sign in"
          />
          </Link>
        </section>
      </Fade>
      <Fade big left>
        <section className={classes.signUpRight}>
          <h1>Join Us</h1>
          <div className={classes.signups}>
            <FcGoogle />
            <span>Continue with Google</span>
          </div>
          <div className={classes.signups}>
            <BsApple className={classes.BsApple} />
            <span>Continue with Apple</span>
          </div>
          <form onSubmit={signupHandler}>
            <Input placeholder="e-mail" type="email" id="email">
              <GoMail />
            </Input>
            <Input placeholder="Password" id="password" type="password">
              <VscKey />
            </Input>
            <Input placeholder="Confirm Password" id="confpass" type="password">
              <VscKey />
            </Input>
            <Link to="setup">
              <DarkButton type="submit" name="sign Up" />
            </Link>
          </form>
        </section>
      </Fade>
    </main>
  );

  return (
    <>
      {!hasAccount && Login}
      {hasAccount && Signup}
    </>
  );
};

export default LoginPage;
