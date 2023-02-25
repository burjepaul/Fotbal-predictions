import './aboutus.styles.scss'
import img from '../../assets/aboutusImage.jpg'
import firstExemple from '../../assets/firstExemple.png'
import secondExemple from '../../assets/secondExemple.png'
import thirdExemple from '../../assets/thirdExemple.png'

const Aboutus = () => {
    return (
        <>
        <h1>About Us</h1>
        <div className='image-container'>
            <img src={img} alt="aboutus" className='aboutus-image'/>
            <div className='image-text'>
                <p>Using an automate software, we are trying to predict the fotbal matches results. The automation is done by scanning all the fotbal matches that are going to be 
                    played tomorrow, and base on the teams form it is going to predict the winner (see below). Each day there will be at least 10 games that are most likely to be correct,
                    depending of overall loading. The scanning is done only on competition where there is a standing. For cups, frendly matches and other such events being ignored.</p>
            </div>  
        </div>
        <div className='calculation-description'>
            <h2>How the computation is made:</h2>
            <div className='first-exemple'>
                <h2>1)</h2>
                <p> For this first example we have Hoffenheim playng agains Dortmund. Below we can se that Dortmund comes after 5 wins in a row, so it is in a good form, on the other hand,
                    we have Hoffenheim with no win, just one equal and 4 loses. In this case the output will come as a victory for Dotmund.
                </p>
                <img src={firstExemple} alt="first exemple" className='first-exemple-img'/>
            </div>
            <div className='first-exemple'>
                <h2>2)</h2>
                <p> In this second exemple the form difference between Sheffield and Charlton is not so obvious, but in this case it's taken into account the teams aganst they have
                    played. Sheffield's poorest result (1 draw) being against the 3rd team of the standing, while Charlton best to results (2 wins) are agains the last team and one
                    from the second part of the standing. By calculating also the wins (for Sheffield) and the losses (for Charlton) against the teams who has been made, a total score
                    difference is establish. The higher the score difference is, the higher the chances of win are (you can sort every day predictions by this value).
                </p>
                <img src={secondExemple} alt="first exemple" className='first-exemple-img'/>
            </div>
            <div className='first-exemple'>
                <h2>3)</h2>
                <p> This is the third exemple, here the form between teams is almost the same.The calculation it's done the same ,but compared with the previous exemple, where a
                    higher score difference predicts the winner, here we take the opposite end, with the score difference as low as possible (slightly advantage for away team) and 
                    predicting a possible draw. To increase the chances of a positive result, another criteriea for teams to meet, is in one of the previous 5 matches, each team 
                    has to have at least one draw result allready.
                </p>
                <img src={thirdExemple} alt="first exemple" className='first-exemple-img'/>
            </div>
        </div>
        </>
    )
}

export default Aboutus