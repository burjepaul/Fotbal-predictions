import { Fragment } from 'react'
import ByCountry from './byCountry/byCountry.component'
import ByOdd from './byOdd/byOdd.component'
import './statistics.styles.scss'
import Tops from './tops/tops.component'

const Statistics = () => {
    return (
        <Fragment>
            <h1>Statistics</h1>
            <div className='statistics-container'>
                <ByOdd className='byOddItem'/>
                <ByCountry className='byCountryItem'/>
                <div className='topsItem'>
                    <Tops/>
                </div>
            </div>
        </Fragment>
    )
}

export default Statistics