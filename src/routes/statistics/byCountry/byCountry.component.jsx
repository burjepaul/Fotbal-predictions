import "./byCountry.styles.scss"

import { useEffect, useReducer, useState } from "react"
import Circle from "../../../components/statistics-circle/statisitics-circle.components"
import Spinner from "../../../components/spinner/spinner"
import availableLeagues from '../../../config/leagues.json'

const ByCountry = () => {

    const [leagueStats, setLeagueStats] = useState()
    const [missingData, setmissingData] = useState(false)

    
    const countries = Object.keys(availableLeagues)


    const initialValues= {
        querryCountry: countries[0],
        leagues: availableLeagues[countries[0]],
        querryLeague: availableLeagues[countries[0]][0]
    }

    const ACTION_TYPES = {
        CHANGE_COUNTRY: 'change_country',
        CHNAGE_LEAGUE: 'change_league'
    }

    const reducer = (state, action) => {
        switch(action.type){
            case ACTION_TYPES.CHANGE_COUNTRY:
                return{
                    ...state,
                    querryCountry: action.next_country,
                    leagues: availableLeagues[action.next_country],
                    querryLeague: availableLeagues[action.next_country][0]
                }
            case ACTION_TYPES.CHNAGE_LEAGUE:
                return{
                    ...state,
                    querryLeague: action.next_league
                }
            default:
                return state
        }
    }
    const onOptionChangeCountryHandler = (e) => {
        dispatch({
            type: ACTION_TYPES.CHANGE_COUNTRY,
            next_country: e.target.value
        })
    }

    const onOptionChangeLeagueHandler = (e) => {
        dispatch({
            type: ACTION_TYPES.CHNAGE_LEAGUE,
            next_league: e.target.value
        })
    }

    const [state, dispatch] = useReducer(reducer, initialValues)

    useEffect(() => {
        setLeagueStats(null)
        setmissingData(false)
        const fetchLeagueQuery =async () => {
            try{
                const response = await fetch(`https://fotbal.herokuapp.com/matches/statistics/?league_querry=True&country=${state.querryCountry}&league=${state.querryLeague}`)
                if (!response.ok){
                    setmissingData(true)
                    throw new Error('Something went wrong!')
                }
                const data = await response.json();
                setLeagueStats(data)
            }catch(e){
                console.log(e)
            }
        }
        fetchLeagueQuery()
    },[state.querryCountry, state.querryLeague])

    let output

    if (!leagueStats && !missingData) output = <Spinner/>
    else if (!leagueStats && missingData) output = <h2 className="missing-data-title">No data</h2>
    else output = <Circle oddStats={leagueStats}/>

    return(
        <div className="win-percentage-country">
            <h2>Wins by country and league</h2>
            <form>
                <h3>Select Country:</h3>
                <select onChange={onOptionChangeCountryHandler} className="country-selector">
                    {countries.map((option, index) => {
                        return <option key={index} >
                                    {option}
                                </option>
                        })}
                </select>
                <br></br>
                <h3>Select League:</h3>
                <select onChange={onOptionChangeLeagueHandler} className="league-selector">
                    {state.leagues.map((option, index) => {
                        return <option key={index} >
                                    {option}
                                </option>
                        })}
                </select>
            </form>
            <div className='circle'>
                {output}
            </div>
        </div>
    )
}

export default ByCountry