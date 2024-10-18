import React from 'react';
import { Link } from "react-router-dom"
import "../styles/Footer.css"

function Footer() {
    return (

        <footer className="footer-distributed">

            <div className="footer-left">
                <Link to="/" style={{ textDecoration: 'none' }}>

                    <h3>Hack To Enable</h3>
                </Link>

                <p className="footer-links">
                    <a href="" className="link-1">Home</a>

                    <a href="#">Blog</a>

                    <a href="#">Pricing</a>

                    <a href="#">About</a>

                    <a href="#">Faq</a>

                    <a href="#">Contact</a>
                </p>

                <p className="footer-company-name">Hack To Enable © 2021</p>
            </div>

            <div className="footer-center">

                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>552 East Market Street</span> Suite 302 Louisville, KY 40202</p>
                </div>

                <div>
                    <i className="fa fa-phone"></i>
                    <p>(502) 203-1125</p>
                </div>

                <div>
                    <i className="fa fa-envelope"></i>
                    <p><a href="mailto:support@company.com">innovativeDev@company.com</a></p>
                </div>

            </div>

            <div className="footer-right">

                <p className="footer-company-about">
                    <span>Innovative Dev</span>
        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
    </p>

                <div className="footer-icons">

                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                    <a href="#"><i className="fa fa-linkedin"></i></a>
                    <a href="#"><i className="fa fa-github"></i></a>

                </div>

            </div>

        </footer>
    )
}

export default Footer;