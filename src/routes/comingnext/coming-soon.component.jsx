import './coming-soon.styles.scss'

import comingSoonImage1 from '../../assets/comingsoon-example1.png'
import comingSoonImage2 from '../../assets/comingsoon-example2.jpg'
import comingSoonImage3 from '../../assets/comingsoon-example3.jpg'

const ComingSoon = () => {
    return(
        <>
            <h1>Next Improvements</h1>
            <div className='improvement-container'>
                <p className='improvement-text'>
                &nbsp;&nbsp;&nbsp;The very next improvement would be predictions made by goals that might occur in a game.<br/> 
                The evaluation will be made agains all games that are being played in a day. A top will be made out of all those games, first ones are most likely to have a high number of goals and will be predicted with an over 2.5 goals pre match and the last, that ar most unlikely will be bredicted as under 2.5 goals pre match.<br/>
                &nbsp;&nbsp;&nbsp;In the next example we have Leeds playing agains Brighton, we can see, by comparing their goals histoy with the other teams, that they usualy score and conced goals, having an average of 3 goals per match, so it can be a candidate for over 2.5 goals.<br/>
                &nbsp;&nbsp;&nbsp;Another criteria will be their last 5 games form and how offensive/deffensive have been played and agains who this matches were taken against.
                </p>
                <img src={comingSoonImage1} alt="comingSoonImage1" className='improvement-image'/>
            </div>
            <div className='improvement-container'>
                <img src={comingSoonImage2} alt="comingSoonImage2" className='improvement-image'/>
                <p className='improvement-text'>
                    &nbsp;&nbsp;&nbsp;The next project, which is already under construction, is building a mobile app, available on Google Play Store and App Store.<br/> 
                    &nbsp;&nbsp;&nbsp;Even though, this web site is working on mobiles, an application will be more friendly and easier to use.
                </p>
            </div>
            <div className='improvement-container'>
                <p className='improvement-text'>
                    &nbsp;&nbsp;&nbsp;You can see in the navigation panel that there is a sign in entry, for now this is not available. <br/>
                    &nbsp;&nbsp;&nbsp;Not so soon, it will be available and by singing in users can make an account, and have access to a private forum , discuss with other users and make their own betting slips.<br/> 
                </p>
                <img src={comingSoonImage3} alt="comingSoonImage3" className='improvement-image'/>
            </div>
        </>
    )
}

export default ComingSoon