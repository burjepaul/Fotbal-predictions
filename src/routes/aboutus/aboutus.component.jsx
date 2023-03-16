import './aboutus.styles.scss'
import firstExample from '../../assets/firstExample.png'
import secondExample from '../../assets/secondExample.png'
import thirdExample from '../../assets/thirdExample.png'
import formImage1 from '../../assets/formImage1.png'
import formImage2 from '../../assets/formImage2.png'

const Aboutus = () => {
    return (
        <>

        <div className='aboutus-hero' style={{
                 backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(' + require(`../../assets/aboutusImage.jpg`) + ')'
            }}>
                <div className='title-container'>
                    <h1>What we do, how we do</h1>
                </div>
                <div className='image-container'>
                    <div className='image-text'>
                        <p>&nbsp; Using an automate software, we are trying to predict the fotbal matches results. The automation is done by scanning all the fotbal matches that are going to be 
                            played tomorrow, and base on the teams form it is going to predict the winner (see below).<br/> 
                            &nbsp;Each day there will be at least 10 games that are most likely to be correct,
                            depending of overall loading. The scanning is done only on competition where there is a standing. For cups, frendly matches and other such events being ignored.
                        </p>
                    </div>  
                </div>
        </div>

        <div className='calculation-description'>
            <h2>Way of calculating:</h2>
            <p>&nbsp;&nbsp;&nbsp; The automation is done by extracting all the games and their respective leagues, for each team of the league a form score is calculated based on the result of last five 
                matches played and the position in the standing of those teams (see firts image). After this a difference is calculated between the 2 facing teams meaning a difference
                in form.
                <br></br>
                &nbsp;&nbsp;&nbsp; This is done for all games playing in the next day. Finally, the output will contain all matches together with this form difference. By filtering those, and including only
                the ones with the highest score difference the final prediction are made for the winners, and including those with the lowest as a draw.(see image 2).
                <br></br>
                &nbsp;&nbsp;&nbsp; Statistical, it is confirmed that home teams have a 15% higher rate of winning, so for a prediction of "2", maning that the away team is going to win,from the score difference
                is subtracted 15%.
                </p>    
            <div className='calculation-images'>
                <img src={formImage1} alt="first example" className='form-image1'/>
                <img src={formImage2} alt="first example" className='form-image2'/>
            </div>
        </div>

        <div className='examples'>
            <h2>Examples:</h2>
            <div className='first-example'>
                <p>&nbsp;&nbsp;&nbsp; For this first example we have Hoffenheim playng agains Dortmund. Next we can se that Dortmund comes after 5 wins in a row, so it is in a good form, on the other hand,
                    we have Hoffenheim with no win, just one equal and 4 loses. In this case the output will come as a victory for Dotmund.
                </p>
                <img src={firstExample} alt="first example" className='first-example-img'/>
            </div>
            <div className='horizontal-rule-about-us'></div>
            <div className='first-example'>
                <p>&nbsp;&nbsp;&nbsp; In this second example the form difference between Sheffield and Charlton is not so obvious, but in this case it's taken into account the teams aganst they have
                    played. Sheffield's poorest result (1 draw) being against the 3rd team of the standing, while Charlton best to results (2 wins) are agains the last team and one
                    from the second part of the standing. By calculating also the wins (for Sheffield) and the losses (for Charlton) against the teams they had meet, a total score
                    difference is establish. The higher the score difference is, the higher the chances of win are (you can sort every day predictions by this value).In this case Sheffield 
                    would be considered the winner.
                </p>
                <img src={secondExample} alt="first example" className='first-example-img'/>
            </div>
            <div className='horizontal-rule-about-us'></div>
            <div className='first-example'>
                <p>&nbsp;&nbsp;&nbsp; This is the third example, here the form between teams is almost equal. The calculation it's done the same ,but compared with the previous example, where a
                    higher score difference predicts the winner, here we take the opposite end, with the score difference as low as possible (slightly advantage for away team) and 
                    predicting a possible draw. To increase the chances of a positive result, another criteriea to meet, is in one of the previous 5 matches, each team 
                    must have at least one draw result.
                </p>
                <img src={thirdExample} alt="first example" className='first-example-img'/>
            </div>
        </div>
        </>
    )
}

export default Aboutus