import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { VscKey } from "react-icons/vsc";
import classes from "./NewPassword.module.css";
import Input from "../../Components/Input/Input";
import DarkButton from "../../Components/Button/DarkButton";

const NewPassword = () => {
  return (
    <main className={classes.main}>
      <section className={classes.left}>
        <h1>Hello!</h1>
        <p>
          One more step
          <br />
          Continue your journey with us
        </p>
      </section>
      <section className={classes.right}>
        <h1>Reset Password</h1>
        <div className={classes.status}>
          <span>Email Verified</span>
          <GiCheckMark />
        </div>
        <form>
          <Input placeholder="Password" id="password" type="password">
            <VscKey />
          </Input>
          <Input placeholder="Confirm Password" id="conpas" type="password">
            <VscKey />
          </Input>
          <DarkButton type='submit' name='Save Password'/>
        </form>
      </section>
    </main>
  );
};

export default NewPassword;
