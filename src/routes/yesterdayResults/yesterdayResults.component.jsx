import { useState, useEffect, useCallback, Fragment } from 'react'
import MatchesList from '../../components/matchesList/matchesList.component'
import PrePage from '../../components/prePage/prePage.component'
import Spinner from '../../components/spinner/spinner'

import './yesterdayResults.styles.scss'

const YesterdayResults = () => {
    const currentPath = '/yesterdayResults'

    const [predictionsToRender, setPredictionsToRender] = useState('')


    let date = new Date()

    const day = date.getDate()-1
    const month = date.getMonth()+1
    const year = date.getFullYear()
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
        console.log(on_goals)
        console.log(on_final_result)

        return [on_goals, on_final_result]
    }

    const fetchTodayMatchesHandler = useCallback(async () => {
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
    }, [build_date]
    )

    useEffect(() => {
        fetchTodayMatchesHandler()
    },[fetchTodayMatchesHandler, build_date])


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

    if (isLoadingData){
        content = <Spinner/>
    }

    return (
        <Fragment>
            <div className='today-matches-title'>
                <h1>
                    Yesterday's Results
                </h1>
            </div>
            <PrePage currentPath={currentPath} handlePredictionCategory={handlePredictionCategory}/>
            {content}
        </Fragment>
    )
}

export default YesterdayResults