import React from "react";
import classes from "./Tenants.module.css";
import { ImEye } from 'react-icons/im'
import { IoTrashOutline } from 'react-icons/io5'
import { FiEdit } from 'react-icons/fi'
import { Link } from "react-router-dom";

let DUMMY_DATA = [
  {hash: 1, units: 21, name:'Ahmad Tahir', property: 'Lumbi Estate'},
  {hash: 2, units: 36, name:'Ahmad Rufai', property: 'Kado Estate'},
  {hash: 3, units: 64, name:'Ahmad Zahradeen', property: 'Girei Estate'},
  {hash: 4, units: 59, name:'Ahmad Umar', property: 'Yerwa Estate'},
  {hash: 5, units: 27, name:'Ahmad Abdul', property: 'Dabo Estate'},
  {hash: 6, units: 24, name:'Ahmad Imran', property: 'Kano Estate'},
  {hash: 7, units: 21, name:'Ahmad Tahir', property: 'Lumbi Estate'},
  {hash: 8, units: 36, name:'Ahmad Rufai', property: 'Kado Estate'},
  {hash: 9, units: 64, name:'Ahmad Zahradeen', property: 'Girei Estate'},
  {hash: 10, units: 59, name:'Ahmad Umar', property: 'Yerwa Estate'},
  {hash: 11, units: 27, name:'Ahmad Abdul', property: 'Dabo Estate'},
  {hash: 12, units: 24, name:'Ahmad Imran', property: 'Kano Estate'},
  {hash: 13, units: 21, name:'Ahmad Tahir', property: 'Lumbi Estate'},
  {hash: 14, units: 36, name:'Ahmad Rufai', property: 'Kado Estate'},
  {hash: 15, units: 64, name:'Ahmad Zahradeen', property: 'Girei Estate'},
  {hash: 16, units: 59, name:'Ahmad Umar', property: 'Yerwa Estate'},
  {hash: 17, units: 27, name:'Ahmad Abdul', property: 'Dabo Estate'},
  {hash: 18, units: 24, name:'Ahmad Imran', property: 'Kano Estate'},
]

const Tenants = () => {
  return (
    <main className={classes.main}>
      <section className={classes.top}>
        <div className={classes.quick}>
          <h2>Quick Actions</h2>
          <div className={classes.acts}>
            <Link><button className={classes.act}>New Lease</button></Link>
            <Link><button className={classes.act}>New Unit</button></Link>
            <Link to="/settings"><button className={classes.act}>Settings</button></Link>
          </div>
        </div>
      </section>
      <section className={classes.bottom}>
        <div className={classes.tents}>
          <div className={classes.title}>
            <span className={classes.hash}>#</span>
            <span className={classes.name}>Tenant name</span>
            <span className={classes.units}>Units</span>
            <span className={classes.property}>Property</span>
            <span className={classes.action}>Action</span>
          </div>
          <ul>
            {DUMMY_DATA.map((el)=>(
              <li key={el.hash}>
              <span className={classes.hash}>{el.hash}</span>
              <span className={classes.name}>{el.name}</span>
              <span className={classes.units}>{el.units}</span>
              <span className={classes.property}>{el.property}</span>
              <span className={classes.action}>
                <button className={classes.view}>
                  <ImEye />
                </button>
                <button className={classes.edit}>
                  <FiEdit/>
                </button>
                <button className={classes.del}>
                  <IoTrashOutline />
                </button>
              </span>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Tenants;
