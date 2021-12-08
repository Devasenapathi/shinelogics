import React from 'react'
import './Header.css';
import logo from '../assets/logo1.png'
//import Link from 'react-scroll'

export const Header = () => {
    return (
        <div className="header">
            <div className="header_left">
                <div className="img__logo">
                <img src={logo} alt=""></img>
                </div>
            </div>
            <div className="header__right">
              {/*    <Link to="company" smooth={true} duration={500}>
                    <h4>company</h4>
                </Link>

                <Link to="service" smooth={true} duration={500}>
                    <h4>service</h4>
                </Link>

                <Link to="product" smooth={true} duration={500}>
                    <h4>product</h4>
                </Link>

                <Link to="carrers" smooth={true} duration={500}>
                    <h4>carrers</h4>
                </Link>
                <Link to="aboutus" smooth={true} duration={500}>
                    <h4>Aboutus</h4>
                </Link> */}
                <h4>Company</h4>
                <h4>Service</h4>
                <h4>Product</h4>
                <h4>Consultant</h4>
                <h4>About us</h4>
            </div>

        </div>
    )
}
