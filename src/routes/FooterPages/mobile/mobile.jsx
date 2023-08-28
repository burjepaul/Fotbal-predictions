import React from "react";
import videoSecondMp4 from '../../../assets/LogoSecond.mp4'
import videoSecondWebm from '../../../assets/LogoSecond.webm'
import image1 from '../../../assets/mobile-image-1.jpg'
import image2 from '../../../assets/mobile-image-2.jpg'
import image3 from '../../../assets/mobile-image-3.jpg'
import {ReactComponent as GooglePlaySvg} from '../../../assets/google-play.svg'
import {ReactComponent as HuaweiSvg} from '../../../assets/huawei.svg'
import "./mobile.styles.scss"

const Mobile = () => {
    return(
        <div className="mobile-page-container">
            <div className="video-and-text-container">

                <h1 className="mobile-page-title">Find our mobile application for free on:</h1>
                <div className='mobile-logos'>

                    <a href="https://play.google.com/store/apps/details?id=com.fotbal.predictions" target="_blank" rel="noreferrer">
                    <button className='app-button'> <GooglePlaySvg/> <p>Google Play</p></button>
                    </a>
                    <a href="https://appgallery.huawei.com/app/C108277163" target="_blank" rel="noreferrer">
                    <button className='app-button'><HuaweiSvg/> <p>App Gallery</p></button>
                    </a>

                </div>
                <video autoPlay={true} muted={true} loop={true}>
                    <source src={videoSecondWebm} type="video/webm" />
                    <source src={videoSecondMp4} type="video/mp4" />
                </video>

            </div>
            <div className="mobile-screenshots-container">
                <div className="mobile-screenshots-row">
                    <img src={image1} alt="mobile"/>
                    <h1></h1>
                </div>
                <div className="mobile-screenshots-row" style={{marginTop:-200}}>
                    <h1></h1>
                    <img src={image2} alt="mobile"/>

                </div>
                <div className="mobile-screenshots-row" style={{marginTop:-200}}>
                    <img src={image3} alt="mobile"/>
                    <h1></h1>
                </div>
            </div>
        </div>
    )
}

export default Mobile