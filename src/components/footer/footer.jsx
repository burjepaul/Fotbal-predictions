import React from "react";
import './footer.styles.scss'
import { Outlet } from "react-router-dom";
import {ReactComponent as TwitterSvg} from "../../assets/logos/twitter.svg"
import {ReactComponent as InstagramSvg} from "../../assets/logos/instagram.svg"
import {ReactComponent as Facebook} from "../../assets/logos/facebook.svg"
import googlePlayLogo from '../../assets/logos/google-play-badge.png'
import huaweiAppGallery from '../../assets/logos/appgallery.png'

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
                <div className="footer-column-odd">
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
                <h3 className="followText">
                    Follow
                </h3>
                <div className="social-media-svg">
                    <TwitterSvg className="twitter"/>
                </div>
                <div className="social-media-svg">
                    <InstagramSvg className="instagram"/>
                </div>
                <div className="social-media-svg">
                    <Facebook className="facebook"/>
                </div>
            </div>

            <div className="footer-column">
                <h3>
                    Mobile apps
                </h3>
                <h5>
                    <a href="/">Find our mobile app for free on:</a>
                </h5>
                <h5>
                    <a href="https://play.google.com/store/apps/details?id=com.fotbal.predictions" target="_blank" rel="noreferrer">
                    <img src={googlePlayLogo} alt="GooglePlay" className="applications-images"/>
                    </a>
                </h5>
                <h5>
                    <a href="https://appgallery.huawei.com/app/C108277163" target="_blank" rel="noreferrer">
                        <img src={huaweiAppGallery} alt="AppGalery" className="applications-images"/>
                    </a>
                </h5>
            </div>
        </div>
        </>
    )
}

export default Footer