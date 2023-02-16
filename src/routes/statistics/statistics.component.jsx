
import { Fragment, useEffect, useState } from 'react'
import Spinner from '../../components/spinner/spinner'
import Circle from '../../components/statistics-circle/statisitics-circle.components'
import './statistics.styles.scss'

const Statistics = () => {
    
    const [oddValue, setOddValue] = useState(2)
    const [oddQuerry, setOddQuerry] = useState(2)
    
    const [oddUnderValue, setOddUnderValue] = useState(3)
    const [oddUnderQuerry, setOddUnderQuerry] = useState(3)
    
    const [prediction, setPrediction] = useState(1)
    const [predictionQuerry, setPredictionQuerry] = useState(prediction)
    
    
    const [oddStatsResponse, setOddStatsResponse] = useState()
    
    useEffect(() => {
        const fetchOddQuery =async () => {
            const response = await fetch(`https://fotbal.herokuapp.com/matches/statistics/?odd_over=${oddQuerry}&odd_under=${oddUnderQuerry}&prediction=${predictionQuerry}`)
            if (!response.ok){
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            setOddStatsResponse(data)
        }
        fetchOddQuery()
    },[oddQuerry, oddUnderQuerry, predictionQuerry])

    const options = ['All', '1', '2', 'X'];
    const onOptionChangeHandler = (e) => {
        setPrediction(e.target.value)
    }


    return (
        <Fragment>
            <h1>Win Percentages</h1>
            <div className='statistics-container'>
                <div className='win-percentage-odds'>
                    <h1>Wins by odd</h1>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            setOddQuerry(oddValue)
                            setOddUnderQuerry(oddUnderValue)
                            setPredictionQuerry(prediction)
                        }}>
                            <h2>Odds over:</h2>
                            <input 
                                type="number"
                                value = {oddValue}
                                onChange={(e) => {
                                    setOddValue(e.target.value)
                                }
                            }
                            />
                            <br></br>
                            <h2>Odds under:</h2>
                            <input 
                                type="number"
                                value = {oddUnderValue}
                                onChange={(e) => {
                                    setOddUnderValue(e.target.value)
                                }
                            }
                            />
                            <br></br>
                            <h2>Prediction result:</h2>
                            
                            <select onChange={onOptionChangeHandler}>
                                {options.map((option, index) => {
                                    return <option key={index} >
                                      {option}
                                </option>
                                 })}
                            </select>
                            <button className="statistics-button">Find</button>
                        </form>
                        <div className='circle'>
                            {oddStatsResponse ? <Circle oddStats={oddStatsResponse}/> : <Spinner/>}
                        </div>
                </div>
                <div className='win-percentage-country'>
                    <h2>Wins per countries:</h2>
                    
                </div>
            </div>
        </Fragment>
    )
}

export default Statistics