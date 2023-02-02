import { useState, useEffect, useCallback, Fragment } from 'react'
import Spinner from '../../components/spinner/spinner'

import TodayMatchesList from '../../components/matchesList/matchesList.component'
import './tomorrowPredictions.styles.scss'

const TomorrowPredictions = () => {
    const [toadyMatches, setTodayMatches] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [error, setError] = useState(null)

    const fetchTodayMatchesHandler = useCallback(async () => {
        setIsLoadingData(true)
        setError(null)
        try{
            const response = await fetch('https://fotbal.herokuapp.com/tomorrowMatches')
            if (!response.ok){
            throw new Error('Something went wrong!')
            }

            const data = await response.json();
            setTodayMatches(data)
        }
        catch(error) {
            setError(error.message)
        }
        setIsLoadingData(false)
    }, []
    )

    useEffect(() => {
        fetchTodayMatchesHandler()
    },[fetchTodayMatchesHandler])

    let content;

    if (!isLoadingData){
        content =  <TodayMatchesList matches={toadyMatches} />
    }

    if (!isLoadingData && error){
        content = <p>{error}</p>
    }

    if (isLoadingData){
        content = <Spinner/>
    }

    return (
        <Fragment>
            <div className='today-matches-title'>
                <h1>
                    Tomorrow's Picks
                </h1>
            </div>
            {content}
        </Fragment>
    )
}

export default TomorrowPredictions