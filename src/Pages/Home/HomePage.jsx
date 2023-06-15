import React from "react";
import classes from "./HomePage.module.css";
import { FaHourglassEnd, FaCoins } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { HiOutlineBuildingOffice } from "react-icons/hi2";
import { AiOutlineMessage } from "react-icons/ai";

let DUMMY_TICKETS = [
  {name: 'Ahmad Rufai', area: 'Giwa Barracks Housing', unit: 'A1', time: 6},
  {name: 'Ahmad Zahradeen', area: 'Dikko Barracks Housing', unit: 'A4', time: 10},
  {name: 'Tahir Ahidjo', area: 'Dokey Barracks Housing', unit: 'B7', time: 45},
  {name: 'Neymar De Silva', area: 'Monkey Barracks Housing', unit: 'B2', time: 2},
  {name: 'Leonel Messi', area: 'Dodo Barracks Housing', unit: 'A7', time: 55},
  {name: 'Mufti Menk', area: 'Kado Barracks Housing', unit: 'A9', time: 3},
  {name: 'Cristiano Ronaldo', area: 'Borno Barracks Housing', unit: 'A5', time: 35},
  {name: 'Goodluck Johnathan', area: 'Atiku Barracks Housing', unit: 'A3', time: 27},
  {name: 'Muhammadu Buhari', area: 'Gwamna Barracks Housing', unit: 'A2', time: 59},
  {name: 'Bola Tinubu', area: 'Asiwaju Barracks Housing', unit: 'A6', time: 18},
]

const HomePage = () => {
  return (
    <main className={classes.main}>
      <h1>Dashboard</h1>
      <section className={classes.top}>
        <div className={classes["dash-item"]}>
          <div className={classes["dash-icon"]}>
            <FaHourglassEnd />
          </div>
          <div className={classes["dash-item-data"]}>
            <span className={classes["light-data"]}>Due payments</span>
            <span className={classes["dark-data"]}>
              <TbCurrencyNaira /> 0
            </span>
          </div>
        </div>
        <div className={classes["dash-item"]}>
          <div className={classes["dash-icon"]}>
            <FaCoins />
          </div>
          <div className={classes["dash-item-data"]}>
            <span className={classes["light-data"]}>Annual revenue</span>
            <span className={classes["dark-data"]}>
              <TbCurrencyNaira /> 0
            </span>
          </div>
        </div>
        <div className={classes["dash-item"]}>
          <div className={classes["dash-icon"]}>
            <HiOutlineBuildingOffice />
          </div>
          <div className={classes["dash-item-data"]}>
            <span className={classes["light-data"]}>Properties</span>
            <span className={classes["dark-data"]}> 0
            </span>
          </div>
        </div>
        <div className={classes["dash-item"]}>
          <div className={classes["dash-icon"]}>
            <AiOutlineMessage />
          </div>
          <div className={classes["dash-item-data"]}>
            <span className={classes["light-data"]}>Pending requests</span>
            <span className={classes["dark-data"]}> 0
            </span>
          </div>
        </div>
      </section>
      <section className={classes.bottom}>
        <div className={classes.chart}>
          <h2>Revenue Chart</h2>
        </div>
        <div className={classes.tickets}>
          <h2>Open tickets</h2>
          <ul>
            {DUMMY_TICKETS.map((el)=>(
              <li key={el.name}>
              <div className={classes.circle}></div>
              <div className={classes['ticket-data']}>
                <span className={classes.light}>{el.name}</span>
                <span className={classes.dark}>{el.area}</span>
              </div>
              <div className={classes['ticket-data']}>
                <span className={classes.dark}>Unit: {el.unit}</span>
                <span className={classes.light}>{el.time} min ago</span>
              </div>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
