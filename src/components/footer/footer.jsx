import React from "react";
import './footer.styles.scss'
import { Outlet } from "react-router-dom";
import {ReactComponent as TwitterSvg} from "../../assets/twitter.svg"
import {ReactComponent as InstagramSvg} from "../../assets/instagram.svg"
import {ReactComponent as Facebook} from "../../assets/facebook.svg"

const Footer = () => {
    return(
        <>
        <Outlet/>
        <div className="top-line"></div>
        <div className="footer-container">
                <div className="footer-column">
                    <h3>
                        <a href="/">TheOracle.com</a>
                    </h3>
                        
                    <h5>
                        <a href="/terms-of-use">Terms of Use</a>
                    </h5>
                    <h5>
                        <a href="/privacy-policy">Privacy Policy</a>
                    </h5>
                    <h5>
                        <a href="/contact">Contact</a>
                    </h5>
                </div>
                <div className="footer-column">
                    <br/>
                    <h5>
                        <a href="/mobile">Mobile</a>
                    </h5>
                    <h5>
                        <a href="/recommended-sites">Recommended Sites</a>
                    </h5>
                    <h5>
                        <a href="/faq">FAQ</a>
                    </h5>
                </div>

            <div className="footer-column">
                <h3>
                    <a href="/">Follow</a>
                </h3>
                <h5>
                    <TwitterSvg className="social-media-svg twitter"/>
                </h5>
                <h5>
                    <InstagramSvg className="social-media-svg instagram"/>
                </h5>
                <h5>
                    <Facebook className="social-media-svg facebook"/>
                </h5>
            </div>

            <div className="footer-column">
                <h3>
                    <a href="/">Mobile apps</a>
                </h3>
                <h5>
                    <a href="/">Find our mobile app for free on:</a>
                </h5>
                <h5>
                    <a href="/">Poza</a>
                </h5>
                <h5>
                    <a href="/">Poza</a>
                </h5>
            </div>
        </div>
        </>
    )
}

export default Footer