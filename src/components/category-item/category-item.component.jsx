import { Link } from 'react-router-dom'
import './category-item.styles.scss'

const CategoryItem = ({category, handlePredictionCategory}) => {
    const {title, imageUrl, path, id} = category
    return (
        id < 10 ? 
            <Link className='category-container' to={path}>
                    <div 
                        className='background-image'
                        style= {{
                            backgroundImage: 'url(' + require(`../../assets/${imageUrl}.png`) + ')'
                        }}    
                        />
                    <div className='category-body-container'>
                        <p className='category-title'>{title}</p>
                    </div>
            </Link>
        :
            <div className='category-container' onClick={() => handlePredictionCategory(title)}>
                <div
                    className='background-image'
                    style= {{
                        backgroundImage: 'url(' + require(`../../assets/${imageUrl}.png`) + ')'
                    }}    
                    />
                    <div className='category-body-container'>
                    <p className='category-title'>{title}</p>
                </div>
            </div>
    )
}

export default CategoryItem