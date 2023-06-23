import { Fragment, useContext } from 'react'
import ByCountry from './byCountry/byCountry.component'
// import ByOdd from './byOdd/byOdd.component'
import './statistics.styles.scss'
import Tops from './tops/tops.component'
import { StatisticsContext } from '../../contexts/statistics.context'
import Spinner from '../../components/spinner/spinner'

const Statistics = () => {
    const {statistics} = useContext(StatisticsContext)

    let output
    if (!statistics) output = <Spinner/>
    else output = <ByCountry statistics={statistics} className='byCountryItem'/>

    return (
        <Fragment>
            <h1>Statistics</h1>
            <div className='statistics-container'>
                {/* <ByOdd className='byOddItem'/> */}
                {output}
                <div className='topsItem'>
                    <Tops/>
                </div>
            </div>
        </Fragment>
    )
}

export default Statistics