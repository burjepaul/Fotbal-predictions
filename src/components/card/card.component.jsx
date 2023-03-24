import './card.styles.scss'

const Card = ({title, imageSource, text, handleCardRender}) => {
    return(
        <div className='card' onClick={handleCardRender}>
            <h3>{title}</h3>
            <img src={imageSource} alt='card-img' className='card-image'/>
            <p className='card-text'>{text}</p>
        </div>
    )
}

export default Card