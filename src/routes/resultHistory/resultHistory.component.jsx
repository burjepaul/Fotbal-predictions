import './resultHistory.styles.scss'
import Calendar from 'react-calendar'
import { useState, useEffect } from 'react'
import MatchesList from '../../components/matchesList/matchesList.component';
import Spinner from '../../components/spinner/spinner';

const ResultHistory = () => {
    let date = new Date()
    date.setDate(date.getDate() - 1)
    const [value, onChange] = useState(date);
    const day = value.getDate()
    const month = value.getMonth()+1
    const year = value.getFullYear()
    const build_date = year + "-" + month + "-" + day

    const [dayMatches, setDayMatches] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [error, setError] = useState(null)


    const fetchTodayMatchesHandler =async () => {
        setIsLoadingData(true)
        setError(null)
        try{
            const response = await fetch(`https://fotbal.herokuapp.com/matches/yesterdayResults/?date=${build_date}`)
            if (!response.ok){
            throw new Error('Something went wrong!')
            }

            const data = await response.json();
            setDayMatches((data))
        }
        catch(error) {
            setError(error.message)
        }
        setIsLoadingData(false)
    }
    

    useEffect(() => {
        fetchTodayMatchesHandler()
    // eslint-disable-next-line
    },[value])

    let content;

    
    if (!isLoadingData){
        content = <MatchesList matches={dayMatches} />
    }
    if (!isLoadingData && error){
        content = <p>{error}</p>
    }

    if(!isLoadingData && dayMatches.length === 0)
        content = <p>No recorded data for this day</p>

    if (isLoadingData){
        content = <Spinner/>
    }

    return (
        <>
            <div className='today-matches-title'>
                <h1>Results History</h1>
                <h3>Choose a date from which you want to see the results</h3>
                <Calendar onChange={onChange} value={value} maxDate={date} minDetail="year" className="calendar"/>
                {content}
            </div>
        </>
    )
}

export default ResultHistory