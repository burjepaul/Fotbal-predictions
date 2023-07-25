import { Link } from 'react-router-dom'
import './category-item.styles.scss'
import {useRef } from 'react'
import { OpacityPercentage } from '../../config/helpers'

const CategoryItem = ({category, handlePredictionCategory}) => {
    const {title, imageUrl, path, id} = category
    const elementRef = useRef(null)

    const percentageToShow = OpacityPercentage(elementRef)

    console.log(title)
    console.log(percentageToShow)

    return (
        id < 10 ? 
            <Link className='category-container' to={path}>
                    <div 
                        ref={elementRef}
                        className='background-image'
                        style= {{
                            backgroundImage: 'url(' + require(`../../assets/${imageUrl}.png`) + ')',
                            opacity:`${percentageToShow ? percentageToShow : 0}%`
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