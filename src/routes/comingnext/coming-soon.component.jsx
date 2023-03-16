import './coming-soon.styles.scss'


import comingSoonImage1 from '../../assets/comingsoon-example1.png'
import comingSoonImage2 from '../../assets/comingsoon-example2.jpg'
import comingSoonImage3 from '../../assets/comingsoon-example3.jpg'

const ComingSoon = () => {
    return(
        <div className='coming-soon-page'>
            <div className='improvement-hero' style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + require(`../../assets/improvements-hero-image.jpg`) + ')'
            }}>
                {/* <img src={heroImage} alt="hero" className='hero-image'/> */}
                <h1>Upcoming projects</h1>
                <h2>See below what's happening soon</h2>
            </div>
            <div className='improvements-container'>
                <div className='improvement-container'>
                    <div className='improvement-text'>
                        <h2>Goals</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;The very next improvement would be predictions made by goals that might occur in a game.<br/> 
                            &nbsp;&nbsp;&nbsp;A top will be made out of all games played today, first ones are most likely to have a high number of goals and the last are most unlikely.<br/>
                            &nbsp;&nbsp;&nbsp;In the next example we have Leeds playing agains Brighton, we can see, by comparing their goals histoy with the other teams, that they usually score and conced goals, having an average of 3 goals per match, so it can be a candidate for over 2.5 goals.<br/>
                            &nbsp;&nbsp;&nbsp;Another criteria will be their last 5 games form and how offensive/deffensive have been played and agains who this matches were taken against.
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
                            &nbsp;&nbsp;&nbsp;The next project, which is already under construction, is building a mobile app, available on Google Play Store and App Store.<br/>
                            &nbsp;&nbsp;&nbsp;Even though, the web site is working for mobiles devices, an application will be more friendly and easier to use. After it has been installed on the phone, the aplication will have the same functionallity as this web site.
                        </p>
                    </div>
                </div>

                <div className='horizontal-rule'></div>

                <div className='improvement-container'>
                    <div className='improvement-text'>
                        <h2>Login service</h2>
                        <p>
                            &nbsp;&nbsp;&nbsp;You can see in the navigation panel that there is a sign in entry, for now this is not available. <br/>
                            &nbsp;&nbsp;&nbsp;Not so soon, it will be available and by singing in users can make an account, and have access to a private forum , discuss with other users and make their own betting slips.<br/> 
                        </p>
                    </div>
                    <img src={comingSoonImage3} alt="comingSoonImage3" className='improvement-image'/>
                </div>
            </div>
        </div>
    )
}

export default ComingSoon