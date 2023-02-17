import { Fragment } from 'react'
import ByOdd from './byOdd/byOdd.component'
import './statistics.styles.scss'

const Statistics = () => {
    return (
        <Fragment>
            <h1>Statistics</h1>
            <div className='statistics-container'>
                <ByOdd/>
                <div className='win-percentage-country'>
                    <h2>Wins per countries:</h2>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Statistics