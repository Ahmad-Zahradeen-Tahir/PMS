import React from "react";
import classes from "./Settings.module.css";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillHouseAddFill } from "react-icons/bs";
import { ImEye } from "react-icons/im";
import { RiCommunityLine } from "react-icons/ri";
import { FaUsers, FaCoins } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";

const Settings = () => {
  const [searchParams] = useSearchParams();
  const overview = searchParams.get("mode") === "overview";
  const units = searchParams.get("mode") === "units";
  const tenants = searchParams.get("mode") === "tenants";
  const leases = searchParams.get("mode") === "leases";
  const rere = searchParams.get("mode") === "requests";

  const overPage = (
    <div className={classes.overview}>
      <div className={classes.left}>
        <div className={classes.data}>
          <div className={classes["data-icon"]}>
            <IoLocationOutline />
          </div>
          <div className={classes.details}>
            <span className={classes.name}>Lumbi Estate</span>
            <span>
              No. 10 Gomari Airport <br /> Maiduguri, Borno State <br />
              Nigeria
            </span>
            <span> status: Active</span>
          </div>
        </div>
        <div className={classes.btns}>
          <button className={classes.add}>
            <BsFillHouseAddFill />
            Add Unit
          </button>
          <button className={classes.see}>
            <ImEye />
            View Tenants
          </button>
        </div>
      </div>
      <div className={classes.right}>
      <div className={classes["stand-data"]}>
          <div className={classes["data-icon"]}>
            <RiCommunityLine />
          </div>
          <div className={classes["data-item-data"]}>
            <span className={classes["light-data"]}>Total Units</span>
            <span className={classes["dark-data"]}>30</span>
          </div>
        </div>
        <div className={classes["lay-data"]}>
        <div className={classes["data-icon"]}>
            <FaUsers />
          </div>
          <div className={classes["data-item-data"]}>
            <span className={classes["light-data"]}>Tenants</span>
            <span className={classes["dark-data"]}>20</span>
          </div>
        </div>
        <div className={classes["lay-data"]}>
        <div className={classes["data-icon"]}>
            <FaCoins />
          </div>
          <div className={classes["data-item-data"]}>
            <span className={classes["light-data"]}>Annual Revenue</span>
            <span className={classes["dark-data"]}><TbCurrencyNaira/>0</span>
          </div>
        </div>
      </div>
    </div>
  );

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
        <div className={classes.settings}>
          <div className={classes.title}>
            <NavLink
              className={
                !units && !tenants && !leases && !rere ? classes.active : ""
              }
              to={`?mode=overview`}
            >
              Overview
            </NavLink>
            <NavLink className={units ? classes.active : ""} to={`?mode=units`}>
              Units
            </NavLink>
            <NavLink
              className={tenants ? classes.active : ""}
              to={`?mode=tenants`}
            >
              Tenants
            </NavLink>
            <NavLink
              className={leases ? classes.active : ""}
              to={`?mode=leases`}
            >
              Leases
            </NavLink>
            <NavLink
              className={rere ? classes.active : ""}
              to={`?mode=requests`}
            >
              Reports/Requests
            </NavLink>
          </div>
          {!units && !tenants && !leases && !rere && overPage}
          {units && <h1>Units</h1>}
          {tenants && <h1>tenants</h1>}
          {leases && <h1>leases</h1>}
          {rere && <h1>Requests</h1>}
        </div>
      </section>
    </main>
  );
};

export default Settings;
