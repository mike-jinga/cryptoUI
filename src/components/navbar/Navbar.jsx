import React from 'react'
import "./Navbar.scss";
import Logo from "../../assets/Logo.png"
const Navbar = () => {
  return (
    <header className="navbar">
        <nav className="navbar__container wrapper">
            <a href="" className="navbar_logo">
                <img src={Logo} alt="logo" />
            </a>
             <ul>
                <li>
                    <a href="#">Product</a>
                </li>
                <li>
                    <a href="#">Company</a>
                </li>
                <li>
                    <a href="#">Pricing</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
             </ul>
             <div className="navbar__btns">
                <a href="#" className = "btn">register</a>
             </div>
        </nav>
    </header>
  )
}

export default Navbar