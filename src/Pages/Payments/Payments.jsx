import React from "react";
import classes from "./Payments.module.css";
import { ImEye } from "react-icons/im";
import { Link } from "react-router-dom";

let DUMMY_TENANTS = [
  {
    hash: 1,
    name: "Ahmad Rufai",
    units: 10,
    amount: 350000,
    receipt: "#4567890876589",
    date: "2023-07-22",
  },
  { hash: 2, name: "Ahmad Tahir", units: 15, amount: 250000 },
  {
    hash: 3,
    name: "Ahmad Zahradeen",
    units: 50,
    amount: 500000,
    receipt: "#1234890876589",
    date: "2023-06-13",
  },
  {
    hash: 4,
    name: "Ahmad Umar",
    units: 20,
    amount: 320000,
    receipt: "#4567890876589",
    date: "2022-07-22",
  },
  { hash: 5, name: "Ahmad Abdul", units: 24, amount: 450000 },
  {
    hash: 6,
    name: "Ahmad Muhammad",
    units: 12,
    amount: 150000,
    receipt: "#4567890876589",
    date: "2023-04-12",
  },
  { hash: 7, name: "Isa Rufai", units: 16, amount: 210000 },
  { hash: 8, name: "Musa Rufai", units: 26, amount: 320000 },
  {
    hash: 9,
    name: "Ibrahim Rufai",
    units: 36,
    amount: 360000,
    receipt: "#4567890876589",
    date: "2023-07-22",
  },
  { hash: 10, name: "Aliyu Rufai", units: 28, amount: 220000 },
  {
    hash: 11,
    name: "Ahmad Ahmad",
    units: 42,
    amount: 120000,
    receipt: "#4567890876589",
    date: "2023-07-22",
  },
  {
    hash: 12,
    name: "Ahmad Siraj",
    units: 48,
    amount: 230000,
    receipt: "#4567890876589",
    date: "2023-07-22",
  },
  {
    hash: 13,
    name: "Ahmad Imran",
    units: 34,
    amount: 430000,
    receipt: "#4567890876589",
    date: "2023-07-22",
  },
];

const Payments = () => {
  return (
    <main className={classes.main}>
      <section className={classes.top}>
        <div className={classes.quick}>
          <h2>Quick Actions</h2>
          <div className={classes.acts}>
            <Link>
              <button className={classes.act}>New Lease</button>
            </Link>
            <Link>
              <button className={classes.act}>New Unit</button>
            </Link>
            <Link to="/settings">
              <button className={classes.act}>Settings</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={classes.bottom}>
        <div className={classes.pays}>
          <div className={classes.title}>
            <span className={classes.hash}>#</span>
            <span className={classes.name}>Tenant name</span>
            <span className={classes.units}>Units</span>
            <span className={classes.amount}>Amount</span>
            <span className={classes.rec}>Receipt ID</span>
            <span className={classes.date}>Date Paid</span>
            <span className={classes.action}>Action</span>
          </div>
          <ul>
            {DUMMY_TENANTS.map((el) => (
              <li key={el.hash}>
                <span className={classes.hash}>{el.hash}</span>
                <span className={classes.name}>{el.name}</span>
                <span className={classes.units}>{el.units}</span>
                <span className={classes.amount}>{el.amount}</span>
                <span className={classes.rec}>
                  {el.receipt ? el.receipt : "Pending"}
                </span>
                <span className={classes.date}>
                  {el.receipt
                    ? new Intl.DateTimeFormat("es-sp", {
                        dateStyle: "short",
                      }).format(new Date(el.date))
                    : "Pending"}
                </span>
                <span className={classes.action}>
                  {el.receipt ? (
                    <ImEye className={classes.view} />
                  ) : (
                    <button className={classes.remind}>Send Reminder</button>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Payments;
