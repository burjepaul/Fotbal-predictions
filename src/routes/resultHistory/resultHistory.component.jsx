import './resultHistory.styles.scss'

import Calendar from 'react-calendar'
import { Fragment, useState, useCallback, useEffect } from 'react'
import MatchesList from '../../components/matchesList/matchesList.component';
import Spinner from '../../components/spinner/spinner';

const ResultHistory = () => {
    const [value, onChange] = useState(new Date());
    const day = value.getDate()
    const month = value.getMonth()+1
    const year = value.getFullYear()
    console.log(day, month, year)

    const [toadyMatches, setTodayMatches] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [error, setError] = useState(null)

    const fetchTodayMatchesHandler = useCallback(async () => {
        setIsLoadingData(true)
        setError(null)
        try{
            const response = await fetch('https://fotbal.herokuapp.com/matches/yesterdaysResults')
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
        content =  <MatchesList matches={toadyMatches} />
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
                <h1>Results History</h1>
                <h3>Choose a date from which you want to see the results</h3>
                <Calendar onChange={onChange} value={value} maxDate={new Date()} minDetail="year" className="calendar"/>
                {content}
            </div>
        </Fragment>
    )
}

export default ResultHistory