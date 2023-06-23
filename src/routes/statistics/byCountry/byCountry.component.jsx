import "./byCountry.styles.scss"

import {useEffect, useReducer, useState } from "react"
import Circle from "../../../components/statistics-circle/statisitics-circle.components"
import Spinner from "../../../components/spinner/spinner"
import RadioButtons from "../../../components/radio-button/radio-button"


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
        // const fetchLeagueQuery =async () => {
            //     try{
                //         const response = await fetch(`https://fotbal.herokuapp.com/matches/statistics/?league_querry=True&country=${state.querryCountry}&league=${state.querryLeague}`)
                //         if (!response.ok){
                    //             setmissingData(true)
                    //             throw new Error('Something went wrong!')
                    //         }
                    //         const data = await response.json();
                    //         setLeagueStats(data)
                    //     }catch(e){
                        //         console.log(e)
                        //     }
                        // }
                        // fetchLeagueQuery()
        if (statistics){
            const data = statistics.find((statisticEntry) => statisticEntry.country === state.querryCountry && statisticEntry.league === state.querryLeague)
                            
            if (state.querryLeague === "All"){
                    //Sums all leagues from a specific country and creates a data template to match the others datas from DB 
                const allDataForCountry = statistics.filter((statisticEntry) => statisticEntry.country === state.querryCountry)
                const sum_total_games = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.total_games
                }, 0)
                
                const sum_total_win = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.total_win
                }, 0)
                
                const sum_total_lost = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.total_lost
                }, 0)
                
                const total_win_percentage = sum_total_win/sum_total_games * 100
                
                const total_games_final_result = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.total_games_final_result
                },0)
                
                const win_final_result = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.win_final_result
                },0)
                
                const lost_final_result = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.lost_final_result
                },0)
                
                const win_final_result_with_odd = allDataForCountry.reduce((acc, obj) => {
                    if (obj.average_odd_win) return acc + obj.win_final_result
                    else return acc
                },0)

                const lost_final_result_with_odd = allDataForCountry.reduce((acc, obj) => {
                    if (obj.average_odd_lost) return acc + obj.lost_final_result
                    else return acc
                },0)
                
                const average_odd_win = allDataForCountry.reduce((acc, obj) => {
                    return acc + (obj.average_odd_win*obj.win_final_result)
                },0)/win_final_result_with_odd
                
                const average_odd_lost = allDataForCountry.reduce((acc, obj) => {
                    return acc + (obj.average_odd_lost*obj.lost_final_result)
                },0)/lost_final_result_with_odd
                
                const win_percentage_final_result = win_final_result/total_games_final_result * 100
                
                const total_games_goals = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.total_games_goals
                },0)
                
                const win_goals = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.win_goals
                },0)
                
                const lost_goals = allDataForCountry.reduce((acc, obj) => {
                    return acc + obj.lost_goals
                },0)
                
                const win_percentage_goals = win_goals/total_games_goals * 100
                
                const dataTemplate = {
                    country: state.querryCountry,
                    league: "All",
                    total_games: sum_total_games,
                    total_win: sum_total_win,
                    total_lost: sum_total_lost,
                    total_win_percentage: total_win_percentage,
                    total_games_final_reuslt: total_games_final_result,
                    win_final_reuslt: win_final_result,
                    lost_final_reuslt: lost_final_result,
                    average_odd_win: average_odd_win,
                    average_odd_lost: average_odd_lost,
                    win_percentage_final_result: win_percentage_final_result,
                    total_games_goals:total_games_goals,
                    win_goals:win_goals,
                    lost_goals:lost_goals,
                    win_percentage_goals:win_percentage_goals
                }
                setLeagueStats(dataTemplate)
            }
            else if (data) {
                setLeagueStats(data)
            }
            else setLeagueStats(statistics[0])
        }
    },[state.querryCountry, state.querryLeague, statistics])
    
    let output
    let leagueStatsToForward = {...leagueStats}

    if(state.querryGameType === "final_result"){
        leagueStatsToForward.total_games = leagueStats.total_games_final_result
        leagueStatsToForward.total_win = leagueStats.win_final_result
        leagueStatsToForward.total_lost = leagueStats.lost_final_result
        leagueStatsToForward.win_percentage = leagueStats.win_percentage_final_result
    }
    else if(state.querryGameType === "goals"){
        leagueStatsToForward.total_games = leagueStats.total_games_goals
        leagueStatsToForward.total_win = leagueStats.win_goals
        leagueStatsToForward.total_lost = leagueStats.lost_goals
        leagueStatsToForward.win_percentage = leagueStats.win_percentage_goals
        leagueStatsToForward.average_odd_win = 0
        leagueStatsToForward.average_odd_lost = 0
    }
    else if(state.querryGameType === "All"){
        leagueStatsToForward = leagueStats
    }

    if (!leagueStats && !missingData) output = <Spinner/>
    else if (!leagueStats && missingData) output = <h2 className="missing-data-title">No data</h2>
    else output = <Circle leagueStats={leagueStatsToForward}/>

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
                <RadioButtons onButtonChange={onOptionChangeTypeHandler}/>
            </form>
            <div className='circle'>
                {output}
            </div>
        </div>
    )
}

export default ByCountry