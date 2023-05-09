import { useState, useEffect, useCallback, Fragment } from 'react'
import MatchesList from '../../components/matchesList/matchesList.component'
import Spinner from '../../components/spinner/spinner'
import './yesterdayResults.styles.scss'

let date = new Date()
date.setDate(date.getDate() - 1)
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const build_date = year + "-" + month + "-" + day

const YesterdayResults = () => {
    const [yesterdayMatches, setyesterdayMatches] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(true)
    const [error, setError] = useState(null)

    const fetchYesterdayMatchesHandler = useCallback(async () => {
        setIsLoadingData(true)
        setError(null)
        try{
            const response = await fetch(`https://fotbal.herokuapp.com/matches/yesterdayResults/?date=${build_date}`)
            if (!response.ok){
            throw new Error('Something went wrong!')
            }

            const data = await response.json();
            setyesterdayMatches(data)
        }
        catch(error) {
            setError(error.message)
        }
        setIsLoadingData(false)
    }, []
    )

    useEffect(() => {
        fetchYesterdayMatchesHandler()
    },[fetchYesterdayMatchesHandler])

    
    let content;
    
    if (!isLoadingData){
        content = <MatchesList matches={yesterdayMatches} />
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
                    Yesterday's Results
                </h1>
            </div>
            {content}
        </>
    )
}

export default YesterdayResults