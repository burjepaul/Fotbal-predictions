import './coming-soon.styles.scss'

import comingSoonImage1 from '../../../assets/comingsoon-example1.png'
import comingSoonImage2 from '../../../assets/comingsoon-example2.jpg'
import comingSoonImage3 from '../../../assets/comingsoon-example3.jpg'
import checkeredFlag from '../../../assets/checkered-flag.png'
import comingNext from '../../../assets/right-arrow.png'

import Card from '../../../components/card/card.component'
import { useState } from 'react'
import { useRef } from 'react'

const cardTitles = ["Coming Next", "Completed Projects"]
const cardText = ["See what's coming next", "See accomplished projects"]

const ComingSoon = () => {

    const [comingSoonRender, setComingSonnRender] = useState('')

    const scrollToRef = useRef(null)

    const onCardClick = (index) => {
        setComingSonnRender(cardTitles[index])
        scrollToRef.current?.scrollIntoView({behavior:'smooth'})
    }

    const renderCard = () => {
        switch (comingSoonRender){
            case "":
                return(
                    <div ref={scrollToRef}></div>
                )
            case cardTitles[0]:
                return(
                    <div className='improvement-container' ref={scrollToRef}>
                        <div className='improvement-text'>
                            <h2>Login service</h2>
                            <p>
                                &nbsp;&nbsp;&nbsp;You can see in the navigation panel that there is a sign in entry, for now this is not available. <br/>
                                &nbsp;&nbsp;&nbsp;Not so soon, it will be available and by singing in users can make an account, and have access to a private forum , discuss with other users and make their own betting slips.<br/> 
                            </p>
                        </div>
                        <img src={comingSoonImage3} alt="comingSoonImage3" className='improvement-image'/>
                    </div>
                )
            case cardTitles[1]:
                return(
                    <>
                    <div className='improvement-container' ref={scrollToRef}>
                    <div className='improvement-text'>
                        <h2>Goals</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;Each day, in adition to preditions made on final score result, there is another software which calculates the scoring goals probability.<br/> 
                            &nbsp;&nbsp;&nbsp;This is done by calculating the average goals scored and conceded by every team at home and away.<br/> 
                            &nbsp;&nbsp;&nbsp;In the next exemple we have Brighton with an average of 1.8 goals scored (45 divided by 24) and Leeds with an average of 1.6 goals conceded (42 divided by 26). Those two values are multiplied (1.8 multiplied by 1.6) and based on this calculation a top is made out of every game beeing played, from lowest to highest goals score chance. 
                            </p>
                    </div>
                    <img src={comingSoonImage1} alt="comingSoonImage1" className='improvement-image'/>
                </div>

                <div className='horizontal-rule'></div>

                <div className='improvement-container'>
                    <div className='mobile-view-text'>
                        <h2>Mobile App</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;The next project, which is already under construction, is building a mobile app, available on Google Play Store and App Store.<br/>
                            &nbsp;&nbsp;&nbsp;Even though, the web site is working for mobiles devices, an application will be more friendly and easier to use. After it has been installed on the phone, the aplication will have the same functionallity as this web site.
                        </p>
                    </div>
                    <img src={comingSoonImage2} alt="comingSoonImage2" className='improvement-image'/>
                    <div className='improvement-text desktop-view'>
                        <h2>Mobile App</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;A mobile application is available on <a href="https://play.google.com/store/apps/details?id=com.fotbal.predictions" target="_blank" rel="noreferrer">Google Play Store</a> and Huawei App Gallery. Due to high costs for now it won't be published on App Store.<br/>
                            &nbsp;&nbsp;&nbsp;The application it's in the early stage of construction and you can meet crushes or poor user experience, although the predictions are 100% the same.
                        </p>
                    </div>
                </div>
                    </>
)
            default:
                return null
        }
    }


    return(
        <div className='coming-soon-page'>
            <div className='improvement-hero' style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + require(`../../../assets/improvements-hero-image.jpg`) + ')'
            }}>
                {/* <img src={heroImage} alt="hero" className='hero-image'/> */}
                <h1>Upcoming projects</h1>
                <h2>See below what's happening soon</h2>
            </div>
            <div className='card-container'>
                <Card title={cardTitles[0]} imageSource={comingNext} text={cardText[0]} handleCardRender={() => {onCardClick(0)}}/>
                <Card title={cardTitles[1]} imageSource={checkeredFlag} text={cardText[1]} handleCardRender={() => {onCardClick(1)}}/>
            </div>
            {renderCard()}
        </div>
    )
}

export default ComingSoon