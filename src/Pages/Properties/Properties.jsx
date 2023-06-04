import React from "react";
import classes from "./Properties.module.css";
import { BsHouseAdd, BsHouse } from "react-icons/bs";
import { FaHourglassEnd, FaCoins } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { RiCommunityLine } from "react-icons/ri";
import { ImEye } from "react-icons/im";
import { IoTrashOutline } from "react-icons/io5";

let DUMMY_PROPS = [
  {hash: 1, name: 'Lumbi Estate', units: 10, location: 'Gomari Airport, Maiduguri Borno State'},
  {hash: 2, name: 'Kado Estate', units: 50, location: 'Abuja Airport, Maiduguri Borno State'},
  {hash: 3, name: 'maid Estate', units: 20, location: 'By pass, Kawo Kaduna State'},
  {hash: 4, name: 'Aso Estate', units: 15, location: 'Unguwarimi, Kaduna Kaduna State'},
  {hash: 5, name: 'Bako Estate', units: 100, location: 'Eye Center, Mando Kaduna State'},
  {hash: 6, name: 'Rimi Estate', units: 4, location: 'Essence Int., Malali Kaduna State'},
  {hash: 7, name: 'Nnamdi Estate', units: 22, location: 'Isa kaita, Malali Kaduna State'},
  {hash: 8, name: 'Yozuwa Estate', units: 40, location: 'Unimaid, Maiduguri Borno State'},
]

const Properties = () => {
  return (
    <main className={classes.main}>
      <button className={classes.btn}>
        <BsHouseAdd />
        <span>Add Property</span>
      </button>
      <section className={classes.top}>
        <div className={classes["prop-item"]}>
          <div className={classes["prop-icon"]}>
            <RiCommunityLine />
          </div>
          <div className={classes["prop-item-data"]}>
            <span className={classes["light-data"]}>Total Units</span>
            <span className={classes["dark-data"]}>0</span>
          </div>
        </div>
        <div className={classes["prop-item"]}>
          <div className={classes["prop-icon"]}>
            <BsHouse />
          </div>
          <div className={classes["prop-item-data"]}>
            <span className={classes["light-data"]}>Occupied</span>
            <span className={classes["dark-data"]}>0</span>
          </div>
        </div>
        <div className={classes["prop-item"]}>
          <div className={classes["prop-icon"]}>
            <FaHourglassEnd />
          </div>
          <div className={classes["prop-item-data"]}>
            <span className={classes["light-data"]}>Vacant</span>
            <span className={classes["dark-data"]}> 0</span>
          </div>
        </div>
        <div className={classes["prop-item"]}>
          <div className={classes["prop-icon"]}>
            <FaCoins />
          </div>
          <div className={classes["prop-item-data"]}>
            <span className={classes["light-data"]}>Annual Revenue</span>
            <span className={classes["dark-data"]}>
              <TbCurrencyNaira /> 0
            </span>
          </div>
        </div>
      </section>
      <section className={classes.bottom}>
        <div className={classes.props}>
          <div className={classes.title}>
            <span className={classes.hash}>#</span>
            <span className={classes.name}>Property name</span>
            <span className={classes.units}>Units</span>
            <span className={classes.location}>Location</span>
            <span className={classes.act}>Action</span>
          </div>
          <ul>
            {DUMMY_PROPS.map((e)=>(
              <li key={e.hash}>
              <span className={classes.hash}>{e.hash}</span>
              <span className={classes.name}>{e.name}</span>
              <span className={classes.units}>{e.units}</span>
              <span className={classes.location}>{e.location}</span>
              <span className={classes.act}>
                <button className={classes.view}><ImEye/></button>
                <button className={classes.del}><IoTrashOutline/></button>
              </span>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Properties;
