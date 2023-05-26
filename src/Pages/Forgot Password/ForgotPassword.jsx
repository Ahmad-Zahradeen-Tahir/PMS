import React from "react";
import { Link } from "react-router-dom";
import classes from "./ForgotPassword.module.css";
import Input from "../../Components/Input/Input";
import { GoMail } from 'react-icons/go'
import DarkButton from "../../Components/Button/DarkButton";

const ForgotPassword = () => {
  return (
    <main className={classes.main}>
      <section className={classes.left}>
        <h1>Hello!</h1>
        <p>
          Just a few more steps
          <br />
          Continue your journey with us
        </p>
      </section>
      <section className={classes.right}>
        <h1>Forgot Password?</h1>
        <Input type='email' placeholder='e-mail' id='yourmail' ><GoMail/></Input>
        <Link to='newpassword'><DarkButton name='Reset Password'/></Link>
      </section>
    </main>
  );
};

export default ForgotPassword;
