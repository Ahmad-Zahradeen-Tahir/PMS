import React, { useState } from "react";
import classes from "./Setup.module.css";
import { AiOutlineUser } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import Input from "../../Components/Input/Input";
import DarkButton from "../../Components/Button/DarkButton";
import { Fade } from "react-reveal";

const Setup = () => {
  const [showAlert, setShowAlert] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const alert = (
    <Fade left>
      <div className={classes.alert}>
        <div className={classes.circle}>
          <GiCheckMark />
        </div>
        <h1>Setup Complete!</h1>
      </div>
    </Fade>
  );

  const it = (
    <>
      <h1>Basic setup</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.select}>
          <AiOutlineUser />
          <select defaultValue="user" name="User type" id="userType">
            <option disabled value="user">
              User type
            </option>
            <option value="landlord">Landlord</option>
            <option value="tenant">Tenant</option>
          </select>
        </div>
        <Input type="text" placeholder="Full Name" />
        <Input type="text" placeholder="Company Name" />
        <div className={classes.select}>
          <select
            defaultValue="property"
            name="Property type"
            id="propertyType"
          >
            <option disabled value="property">
              Property type
            </option>
            <option value="Estate">Estate</option>
            <option value="Hotel">Hotel</option>
          </select>
        </div>
        <textarea name="address" id="address" placeholder="Address"></textarea>
        <DarkButton name="Save" type="submit" />
      </form>
    </>
  );
  return (
    <main className={classes.main}>
      <section className={classes.left}>
        <h1>Hello!</h1>
        <p>
          Setup your account to
          <br />
          Continue your journey with us
        </p>
      </section>
      <section className={classes.right}>
        {showAlert && alert}
        {!showAlert && it}
      </section>
    </main>
  );
};

export default Setup;
