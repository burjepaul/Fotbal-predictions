import { Fragment } from 'react'
import ByCountry from './byCountry/byCountry.component'
import ByOdd from './byOdd/byOdd.component'
import './statistics.styles.scss'

const Statistics = () => {
    return (
        <Fragment>
            <h1>Statistics</h1>
            <div className='statistics-container'>
                <ByOdd/>
                <ByCountry/>
            </div>
        </Fragment>
    )
}

export default Statistics