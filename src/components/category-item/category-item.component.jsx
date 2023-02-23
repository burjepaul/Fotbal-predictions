import { Link } from 'react-router-dom'
import './category-item.styles.scss'

const CategoryItem = ({category}) => {
    const {title, imageUrl, path} = category
    return (
        <Link className='category-container' to={path}>
                <div 
                    className='background-image'
                    style= {{
                        backgroundImage: 'url(' + require(`../../assets/${imageUrl}.png`) + ')'
                    }}    
                    />
                    <div className='category-body-container'>
                    <h2>{title}</h2>
                </div>
         </Link>

    )
}

export default CategoryItem