import React from 'react'
import "./Navbar.css"
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg"
import bellIcon from "../../assets/bell_icon.svg"
import profileImage from "../../assets/profile_img.png"
import caretIcon from "../../assets/caret_icon.svg"




const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon}  className="icons"alt="" />
        <p>Children</p>
        <img src={bellIcon}  className="icons"alt="" />
        <div className="navbar-profile">
        <img src={profileImage}  className="profile"alt="" />
        <img src={caretIcon} alt="" />

        </div>

      </div>
    </div>

  )
}

export default Navbar