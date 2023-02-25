import './aboutus.styles.scss'
import img from '../../assets/aboutusImage.jpg'
import firstExemple from '../../assets/firstExemple.png'

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
                <p>For this first example we have Hoffenheim playng agains Dortmund. Below we can se that Dortmund comes after 5 wins in a row, so it is in a good form, on the other hand,
                    we have Hoffenheim with no win, just one equal and 4 loses. In this case the output will come as a victory for Dotmund.
                </p>
                <img src={firstExemple} alt="first exemple" className='first-exemple-img'/>
            </div>
        </div>
        </>
    )
}

export default Aboutus