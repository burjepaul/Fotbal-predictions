import { useEffect, useState, useReducer } from "react"
import Spinner from "../../../components/spinner/spinner"
import Circle from "../../../components/statistics-circle/statisitics-circle.components"

import "./byOdd.styles.scss"

const ByOdd = () => {  
    const [oddStats, setOddStats] = useState() 
    
    const initialValues = {
        oddOverValue: 2,
        oddOverQuerry: 2,
        oddUnderValue: 3,
        oddUnderQuerry: 3,
        predictionValue: "All",
        predictionQuerry: "All"
    }
    
    const ACTION_TYPES = {
        CHANGE_QUERRY: "change_querry",
        CHANGE_ODD_OVER_VALUE: "change_odd_over_value",
        CHANGE_ODD_UNDER_VALUE: "change_odd_under_value",
        CHANGE_PREDICTION: "change_prediction"
    }
    
    const reducer = (state, action) => {
        switch (action.type){
            case ACTION_TYPES.CHANGE_QUERRY:
                return{
                    ...state,
                    oddOverQuerry: state.oddOverValue,
                    oddUnderQuerry: state.oddUnderValue,
                    predictionQuerry: state.predictionValue
                };
                case ACTION_TYPES.CHANGE_ODD_OVER_VALUE:
                    return{
                        ...state,
                        oddOverValue : action.next_odd_over_value,
                        oddOverQuerry: state.oddOverQuerry,
                    };
                    case ACTION_TYPES.CHANGE_ODD_UNDER_VALUE:
                        return{
                        ...state,
                        oddUnderValue : action.next_odd_under_value,
                        oddUnderQuerry: state.oddUnderQuerry
                    };
                    case ACTION_TYPES.CHANGE_PREDICTION:
                        return{
                        ...state,
                        predictionValue: action.next_prediction_value,
                        predictionQuerry: state.predictionQuerry
                    }
                    default:
                        return state
            }
        }
        
        const options = ['All', '1', '2', 'X'];
        const onOptionChangeHandler = (e) => {
            dispatch({
                type: ACTION_TYPES.CHANGE_PREDICTION,
                next_prediction_value: parseInt(e.target.value) ? parseInt(e.target.value) : e.target.value
            })
        }
        const [state, dispatch] = useReducer(reducer, initialValues)
        
        useEffect(() => {
            setOddStats(null)
            const fetchOddQuery =async () => {
                const response = await fetch(`https://fotbal.herokuapp.com/matches/statistics/?odd_querry=True&odd_over=${state.oddOverQuerry}&odd_under=${state.oddUnderQuerry}&prediction=${state.predictionQuerry}`)
                if (!response.ok){
                    throw new Error('Something went wrong!')
                }
                const data = await response.json();
                setOddStats(data)
            }
            fetchOddQuery()
        },[state.oddOverQuerry, state.oddUnderQuerry, state.predictionQuerry])
        
        return (
            <div className='win-percentage-odds'>
                <h2>Wins by odd</h2>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    dispatch({
                        type: ACTION_TYPES.CHANGE_QUERRY,
                    })
                }}>
                    <h3>Odds over:</h3>
                    <input 
                        type="number"
                        value = {state.oddOverValue}
                        onChange={(e) => {
                            dispatch({
                                type: ACTION_TYPES.CHANGE_ODD_OVER_VALUE,
                                next_odd_over_value: parseFloat(e.target.value) ? parseFloat(e.target.value) : ''
                            })
                        }
                    }
                    />
                    <br></br>
                    <h3>Odds under:</h3>
                    <input 
                        type="number"
                        value = {state.oddUnderValue}
                        onChange={(e) => {
                            dispatch({
                                type: ACTION_TYPES.CHANGE_ODD_UNDER_VALUE,
                                next_odd_under_value: parseFloat(e.target.value) ? parseFloat(e.target.value) : ''
                            })
                        }
                        }
                        />
                    <br></br>
                    <h3>Prediction result:</h3> 
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
                    {/* {oddStats ? <Circle oddStats={oddStats}/> : <Spinner/>} */}
                </div>
            </div>
    )
}

export default ByOdd