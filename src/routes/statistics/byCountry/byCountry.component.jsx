import "./byCountry.styles.scss"

import {useEffect, useReducer, useState } from "react"
import Circle from "../../../components/statistics-circle/statisitics-circle.components"
import Spinner from "../../../components/spinner/spinner"
import RadioButtons from "../../../components/radio-button/radio-button"
import {createStatisticsAllLeagusByCountry} from "../../../config/helpers"


const ByCountry = ({statistics}) => {
    const [leagueStats, setLeagueStats] = useState()
    const [missingData, setmissingData] = useState(false)

    const countries = [...new Set(statistics.map(a => a.country))]

    let countryAndLeaguesCollection = {}
    statistics.forEach(element => {
        if (!countryAndLeaguesCollection[element.country]){
            countryAndLeaguesCollection[element.country] = [element.league]
        }
        else if(countryAndLeaguesCollection[element.country].length === 1){
            countryAndLeaguesCollection[element.country].unshift("All")
            countryAndLeaguesCollection[element.country].push(element.league)
        }
        else{
            countryAndLeaguesCollection[element.country].push(element.league)
        }
    });

    const initialValues= {
        querryCountry: "Albania",
        leagues: countryAndLeaguesCollection["Albania"],
        querryLeague: countryAndLeaguesCollection["Albania"][0],
        querryGameType: "All"
    }

    const ACTION_TYPES = {
        CHANGE_COUNTRY: 'change_country',
        CHNAGE_LEAGUE: 'change_league',
        CHANGE_TYPE: 'change_type'
    }

    
    const reducer = (state, action) => {
        switch(action.type){
            case ACTION_TYPES.CHANGE_COUNTRY:
                return{
                    ...state,
                    querryCountry: action.next_country,
                    leagues: countryAndLeaguesCollection[action.next_country],
                    querryLeague: countryAndLeaguesCollection[action.next_country][0]
                }

            case ACTION_TYPES.CHNAGE_LEAGUE:
                return{
                    ...state,
                    querryLeague: action.next_league
                }

            case ACTION_TYPES.CHANGE_TYPE:
                return{
                    ...state,
                    querryGameType: action.next_type
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
                
    const onOptionChangeTypeHandler = (button) => {
        dispatch({
            type: ACTION_TYPES.CHANGE_TYPE,
            next_type: button
        })
    }
                    
    const [state, dispatch] = useReducer(reducer, initialValues)
                    
    useEffect(() => {
        setmissingData(false)
        if (statistics){
            const data = statistics.find((statisticEntry) => statisticEntry.country === state.querryCountry && statisticEntry.league === state.querryLeague)              
            if (state.querryLeague === "All"){
            let dataTemplate = createStatisticsAllLeagusByCountry(statistics, state.querryCountry)
            setLeagueStats(dataTemplate)
        }else{
            setLeagueStats(data)
            }
        }
    },[state.querryCountry, state.querryLeague, statistics])
    
    let output
    let leagueStatsToForward = {...leagueStats}
    
    if(state.querryGameType === "final_result"){
        leagueStatsToForward = {...leagueStats}
        leagueStatsToForward.total_games = leagueStats.total_games_final_result
        leagueStatsToForward.total_win = leagueStats.win_final_result
        leagueStatsToForward.total_lost = leagueStats.lost_final_result
        leagueStatsToForward.total_win_percentage = leagueStats.win_percentage_final_result
    }
    else if(state.querryGameType === "goals"){
        leagueStatsToForward = {...leagueStats}
        leagueStatsToForward.total_games = leagueStats.total_games_goals
        leagueStatsToForward.total_win = leagueStats.win_goals
        leagueStatsToForward.total_lost = leagueStats.lost_goals
        leagueStatsToForward.total_win_percentage = leagueStats.win_percentage_goals
        leagueStatsToForward.average_odd_win = 0
        leagueStatsToForward.average_odd_lost = 0
    }
    else if(state.querryGameType === "All"){
        leagueStatsToForward = {...leagueStats}
    }

    if (!leagueStats && !missingData) output = <Spinner/>
    else if (!leagueStats && missingData) output = <h2 className="missing-data-title">No data</h2>
    else output = <Circle leagueStats={leagueStatsToForward}/>

    return(
        <div className="win-percentage-country">
            <br></br>
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
                <br></br>

                <h3>Select League:</h3>
                <select onChange={onOptionChangeLeagueHandler} className="league-selector">
                    {state.leagues.map((option, index) => {
                        return <option key={index} >
                                    {option}
                                </option>
                        })}
                </select>

                <br></br>
                <br></br>

                <div className='radio-buttons-group'>
                    <RadioButtons onButtonChange={onOptionChangeTypeHandler}/>
                </div>

            </form>
            <div className='circle'>
                {output}
            </div>
        </div>
    )
}

export default ByCountry