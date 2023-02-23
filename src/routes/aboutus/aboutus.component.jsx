import './aboutus.styles.scss'
import img from '../../assets/aboutusImage.jpg'

const Aboutus = () => {
    return (
        <>
        <h1>About Us</h1>
        <div className='image-container'>
            <img src={img} alt="aboutus" className='aboutus-image'/>
            <div className='image-text'>
                <p>We are trying to predict the fotbal matches results using an automate soft. The automation is done by scanning all the fotbal matches that are going to be 
                    played tomorrow, and base on the teams form it is going to predict the winner (see below). Each day there will be at least 10 games that are most likely to be correct,
                    depending of overall loading. The scanning is done only on competition where there is a standing for cups, frendly matches and other such events being ignored.</p>
            </div>  
        </div>
        </>
    )
}

export default Aboutus