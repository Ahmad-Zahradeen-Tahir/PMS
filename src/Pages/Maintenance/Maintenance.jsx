import React from "react";
import classes from "./Maintenance.module.css";
import { Link } from "react-router-dom";
import { ImEye } from "react-icons/im";

let DUMMY_PROBLEMS = [
  {hash: 1, name: "Ahmad Rufai", units: 10, desc: "Security Concerns", resolved: true, date: "2023-07-22"},
  {hash: 2, name: "Ahmad Zahradeen", units: 10, desc: "Broken Toilet", resolved: true, date: "2023-08-26"},
  {hash: 3, name: "Ahmad Tahir", units: 10, desc: "Cracked Ceiling", resolved: false},
  {hash: 4, name: "Ahmad Muhammad", units: 10, desc: "Broken Door", resolved: false},
  {hash: 5, name: "Sadiq Rufai", units: 10, desc: "Electric Fault", resolved: true, date: "2023-06-13"},
  {hash: 6, name: "Musa Rufai", units: 10, desc: "Rodent Issue", resolved: false},
  {hash: 7, name: "Ahmad Rufai", units: 10, desc: "Security Concerns", resolved: true, date: "2023-07-22"},
  {hash: 8, name: "Ahmad Zahradeen", units: 10, desc: "Broken Toilet", resolved: true, date: "2023-08-26"},
  {hash: 9, name: "Ahmad Tahir", units: 10, desc: "Cracked Ceiling", resolved: false},
  {hash: 10, name: "Ahmad Muhammad", units: 10, desc: "Broken Door", resolved: false},
  {hash: 11, name: "Sadiq Rufai", units: 10, desc: "Electric Fault", resolved: true, date: "2023-06-13"},
  {hash: 12, name: "Musa Rufai", units: 10, desc: "Rodent Issue", resolved: false},
];

const Maintenance = () => {
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
            <Link to="/pms/settings">
              <button className={classes.act}>Settings</button>
            </Link>
          </div>
        </div>
      </section>
      <section className={classes.bottom}>
        <div className={classes["main-data"]}>
          <div className={classes.title}>
            <span className={classes.hash}>#</span>
            <span className={classes.name}>Tenant name</span>
            <span className={classes.units}>Units</span>
            <span className={classes.desc}>Description</span>
            <span className={classes.status}>Status</span>
            <span className={classes.date}>Date</span>
            <span className={classes.action}>Action</span>
          </div>
          <ul>
            {DUMMY_PROBLEMS.map((el) => (
              <li key={el.hash}>
                <span className={classes.hash}>{el.hash}</span>
                <span className={classes.name}>{el.name}</span>
                <span className={classes.units}>{el.units}</span>
                <span className={classes.desc}>{el.desc}</span>
                <span className={classes.status}>
                  {el.resolved ? "Resolved" : "Pending"}
                </span>
                <span className={classes.date}>
                  {el.resolved
                    ? new Intl.DateTimeFormat("es-sp", {
                        dateStyle: "short",
                      }).format(new Date(el.date))
                    : "Pending"}
                </span>
                <span className={classes.action}>
                  <button className={classes.view}><ImEye/></button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Maintenance;
