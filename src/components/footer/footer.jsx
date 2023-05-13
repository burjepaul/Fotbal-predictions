import React from "react";
import './footer.styles.scss'
import { Outlet } from "react-router-dom";

const Footer = () => {
    return(
        <>
        <Outlet/>
        <div className="top-line"></div>
        <div className="footer-container">
                <div>
                    <h2>
                        <a href="/">TheOracle.com</a>
                    </h2>
                        
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
                <div>
                    <br/>
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

            <div>
                <h2>
                    <a href="/">Follow</a>
                </h2>
                <h5>
                    <a href="/">Twitter</a>
                </h5>
                <h5>
                    <a href="/">Instagram</a>
                </h5>
                <h5>
                    <a href="/">Facebook</a>
                </h5>
            </div>

            <div>
                <h2>
                    <a href="/">Mobile apps</a>
                </h2>
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