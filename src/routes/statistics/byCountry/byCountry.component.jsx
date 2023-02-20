import "./byCountry.styles.scss"

import countriesAndLeagues from "../../../config/leagues.json"
import { useEffect, useReducer, useState } from "react"
import Circle from "../../../components/statistics-circle/statisitics-circle.components"
import Spinner from "../../../components/spinner/spinner"

const ByCountry = () => {
    const [leagueStats, setLeagueStats] = useState()
    const [missingData, setmissingData] = useState(false)

    const countries = Object.keys(countriesAndLeagues)

    const initialValues= {
        querryCountry: countries[0],
        leagues: countriesAndLeagues[countries[0]],
        querryLeague: countriesAndLeagues[countries[0]][0]
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
                    leagues: countriesAndLeagues[action.next_country],
                    querryLeague: countriesAndLeagues[action.next_country][0]
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
            const response = await fetch(`https://fotbal.herokuapp.com/matches/statistics/?league_querry=True&country=${state.querryCountry}&league=${state.querryLeague}`)
            if (!response.ok){
                setmissingData(true)
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            setLeagueStats(data)
        }
        fetchLeagueQuery()
    },[state.querryCountry, state.querryLeague])

    console.log(leagueStats)
    console.log(missingData)

    let output

    if (!leagueStats && !missingData) output = <Spinner/>
    else if (!leagueStats && missingData) output = <h2>No data</h2>
    else output = <Circle oddStats={leagueStats}/>

    return(
        <div className="win-percentage-country">
            <h2>Wins by country and league</h2>
            <form>
                <h3>Select Country:</h3>
                <select onChange={onOptionChangeCountryHandler}>
                    {countries.map((option, index) => {
                        return <option key={index} >
                                    {option}
                                </option>
                        })}
                </select>
                <br></br>
                <h3>Select League:</h3>
                <select onChange={onOptionChangeLeagueHandler}>
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