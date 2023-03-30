import React, { useEffect, useState, useCallback } from 'react';
import Spinner from '../../../components/spinner/spinner';
import MatchesList from '../../../components/matchesList/matchesList.component';

import './todayMatches.styles.scss'
import PrePage from '../../../components/prePage/prePage.component';

const TodayMatches = () => {
        const currentPath = '/todayMatches'

        const [predictionsToRender, setPredictionsToRender] = useState('')

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
                const response = await fetch('https://fotbal.herokuapp.com/todayMatches')
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
        }, []
        )

        useEffect(() => {
            fetchTodayMatchesHandler()
        },[fetchTodayMatchesHandler])

        const handlePredictionCategory = (x) => {
            setPredictionsToRender(x)
        }

        console.log(predictionsToRender)

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
            <React.Fragment>
                <div className='today-matches-title'>
                    <h1>
                        Today Matches
                    </h1>
                </div>
                <PrePage currentPath={currentPath} handlePredictionCategory={handlePredictionCategory}/>
                {content}
            </React.Fragment>
    );
}


export default TodayMatches