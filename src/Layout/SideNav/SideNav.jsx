import React from 'react'
import classes from './SideNav.module.css'
import { NavLink } from 'react-router-dom'
import { MdOutlineDomain, MdPayment } from 'react-icons/md'
import { HiOutlineBuildingOffice2 } from 'react-icons/hi2'
import { GrServices } from 'react-icons/gr'
import { BiSupport } from 'react-icons/bi'
import { FaUsers, FaTools } from 'react-icons/fa'

const SideNav = () => {
  return (
    <section className={classes.sideBar}>
      <div className={classes.user}>
        <div className={classes.abrv}>TA</div>
        <div className={classes.details}>
            <span className={classes.name}>Tahir Ahidjo</span>
            <span className={classes.type}>Landlord</span>
        </div>
      </div>
      <nav className={classes.nav}>
        <NavLink to='' className={({ isActive }) => (isActive ? classes.active : "")}><MdOutlineDomain/> Dashboard</NavLink>
        <NavLink to='properties' className={({ isActive }) => (isActive ? classes.active : "")}><HiOutlineBuildingOffice2/> Properties</NavLink>
        <NavLink to='tenants' className={({ isActive }) => (isActive ? classes.active : "")}><FaUsers/> Tenants</NavLink>
        <NavLink to='payments' className={({ isActive }) => (isActive ? classes.active : "")}><MdPayment/> Payments</NavLink>
        <NavLink to='maintenance' className={({ isActive }) => (isActive ? classes.active : "")}><FaTools/> Maintenance</NavLink>
        <NavLink to='settings' className={({ isActive }) => (isActive ? classes.active : "")}><GrServices/> Settings</NavLink>
      </nav>
      <button className={classes.support}>
        <BiSupport/>
        <span>Customer Support</span>
      </button>
    </section>
  )
}

export default SideNav
