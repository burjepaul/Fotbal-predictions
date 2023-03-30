import './resultHistory.styles.scss'

import Calendar from 'react-calendar'
import { Fragment, useState, useEffect } from 'react'
import MatchesList from '../../components/matchesList/matchesList.component';
import Spinner from '../../components/spinner/spinner';
import PrePage from '../../components/prePage/prePage.component';

const ResultHistory = () => {
    const currentPath = '/resultHistory'

    const [predictionsToRender, setPredictionsToRender] = useState('')

    let date = new Date()
    date.setDate(date.getDate() - 1)
    const [value, onChange] = useState(date);
    const day = value.getDate()
    const month = value.getMonth()+1
    const year = value.getFullYear()
    const build_date = year + "-" + month + "-" + day

    const [toadyMatches, setTodayMatches] = useState([])
    const [isLoadingData, setIsLoadingData] = useState(false)
    const [error, setError] = useState(null)

    const separateDataByPrediction = (data) => {
        let on_goals = []
        let on_final_result = []
        for (const entry in data){
            // eslint-disable-next-line eqeqeq
            if ('1' in data[entry].prediction.replace("[","").replace("]","").replaceAll("'","").split(",") || '1' == data[entry].prediction.replace("[","").replace("]","").replaceAll("'","").split(",")){
                data[entry].prediction = 1
                on_final_result.push(data[entry])
            }
            // eslint-disable-next-line eqeqeq
            else if ('2' in data[entry].prediction.replace("[","").replace("]","").replaceAll("'","").split(",") || '2' == data[entry].prediction.replace("[","").replace("]","").replaceAll("'","").split(",")){
                data[entry].prediction = 2
                on_final_result.push(data[entry])
            }
            // eslint-disable-next-line eqeqeq
            else if('X' in data[entry].prediction.replace("[","").replace("]","").replaceAll("'","").split(",") || 'X' == data[entry].prediction.replace("[","").replace("]","").replaceAll("'","").split(",")){
                data[entry].prediction = "X"
                on_final_result.push(data[entry])
            }
            else on_goals.push(data[entry])
        }

        return [on_goals, on_final_result]
    }

    const fetchTodayMatchesHandler =async () => {
        setIsLoadingData(true)
        setError(null)
        try{
            const response = await fetch(`https://fotbal.herokuapp.com/matches/yesterdayResults/?date=${build_date}`)
            if (!response.ok){
            throw new Error('Something went wrong!')
            }

            const data = await response.json();
            setTodayMatches(separateDataByPrediction(data))
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

    const handlePredictionCategory = (x) => {
        setPredictionsToRender(x)
    }

    let content;

    
    if (!isLoadingData){
        switch (predictionsToRender){
            case "Goals Goals Goals":
                content = <MatchesList matches={toadyMatches[0]} />
                break
            case "1 X 2":
                content = <MatchesList matches={toadyMatches[1]} />
                break
            default:
                content = <h2>Select a category from above</h2>
        }
    }
    
    if (!isLoadingData && error){
        content = <p>{error}</p>
    }

    if(!isLoadingData && toadyMatches.length === 0)
        content = <p>No recorded data for this day</p>

    if (isLoadingData){
        content = <Spinner/>
    }

    return (
        <Fragment>
            <div className='today-matches-title'>
                <h1>Results History</h1>
                <h3>Choose a date from which you want to see the results</h3>
                <Calendar onChange={onChange} value={value} maxDate={date} minDetail="year" className="calendar"/>
                <PrePage currentPath={currentPath} handlePredictionCategory={handlePredictionCategory}/>
                {content}
            </div>
        </Fragment>
    )
}

export default ResultHistory