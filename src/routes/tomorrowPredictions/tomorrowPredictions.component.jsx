import { useState, useEffect, useCallback } from 'react'
import Spinner from '../../components/spinner/spinner'
import MatchesList from '../../components/matchesList/matchesList.component'
import './tomorrowPredictions.styles.scss'


const TomorrowPredictions = () => {
    const [tomorrowMatches, setTomorrowMatches] = useState([])
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
            setTomorrowMatches((data))
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
        content = <MatchesList matches={tomorrowMatches} />
    }

    if (!isLoadingData && error){
        content = <p>{error}</p>
    }

    if (isLoadingData){
        content = <Spinner/>
    }

    return (
        <>
            <div className='today-matches-title'>
                <h1>
                    Tomorrow's Picks
                </h1>
            </div>
            {content}
        </>
    )
}

export default TomorrowPredictions