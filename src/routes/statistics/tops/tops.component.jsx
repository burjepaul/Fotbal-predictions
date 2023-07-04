import { useReducer } from "react";
import "./tops.styles.scss"
import TopWinnerPicker from "../../../components/top-winners-picker/topWinnerPicker";
import NumericInput from 'react-numeric-input';
import ProgressBar from "./progrssbar/progressbar.component";

const topCountryExtractor = (statistics, minimNuberOfGames, topReturnedValues, selectedGameType) =>{
    // Takes all data from statistics and returns top "topReturnedValues" values by winning percentage
    const topCountry = []
    let totalGames = 0
    let totalWins = 0
    let topLeagues
    switch (selectedGameType){
        case "All":
                topLeagues = []
                for (let i=0; i<statistics.length-1; i++){
                    if (statistics[i].country === statistics[i+1].country){
                        totalGames += statistics[i].total_games
                        totalWins += statistics[i].total_win
                    }
                    else{
                        totalGames += statistics[i].total_games
                        totalWins += statistics[i].total_win
                        if(totalGames > minimNuberOfGames){
                            topCountry.push({
                                country: statistics[i].country,
                                total_games:totalGames,
                                total_win:totalWins,
                                total_lost:totalGames-totalWins,
                                total_win_percentage:(totalWins/totalGames*100)
                            })
                        }
                        totalGames = 0
                        totalWins = 0
                    }
                }
                topLeagues = statistics.filter(league => league.total_games > minimNuberOfGames)
                return [topCountry.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues), topLeagues.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues)]
            
            case "Result":
                topLeagues = []
                for (let i=0; i<statistics.length-1; i++){
                    if (statistics[i].country === statistics[i+1].country){
                        totalGames += statistics[i].total_games_final_result
                        totalWins += statistics[i].win_final_result
                    }
                    else{
                        totalGames += statistics[i].total_games_final_result
                        totalWins += statistics[i].win_final_result
                        if(totalGames > minimNuberOfGames){
                            topCountry.push({
                                country: statistics[i].country,
                                total_games:totalGames,
                                total_win:totalWins,
                                total_lost:totalGames-totalWins,
                                total_win_percentage:(totalWins/totalGames*100)
                            })
                        }
                        totalGames = 0
                        totalWins = 0
                    }
                }
                topLeagues = statistics.filter(league => league.total_games_final_result > minimNuberOfGames).sort((a,b) => b.win_percentage_final_result-a.win_percentage_final_result).slice(0,topReturnedValues)
                for (let entry in topLeagues){
                    topLeagues[entry].total_win_percentage = topLeagues[entry].win_percentage_final_result
                    topLeagues[entry].total_games = topLeagues[entry].total_games_final_result
                    topLeagues[entry].total_win = topLeagues[entry].win_final_result
                }
                return [topCountry.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues), topLeagues]
            
            case "Goals":
                topLeagues = []
                for (let i=0; i<statistics.length-1; i++){
                    if (statistics[i].country === statistics[i+1].country){
                        totalGames += statistics[i].total_games_goals
                        totalWins += statistics[i].win_goals
                    }
                    else{
                        totalGames += statistics[i].total_games_goals
                        totalWins += statistics[i].win_goals
                        if(totalGames > minimNuberOfGames){
                            topCountry.push({
                                country: statistics[i].country,
                                total_games:totalGames,
                                total_win:totalWins,
                                total_lost:totalGames-totalWins,
                                total_win_percentage:(totalWins/totalGames*100)
                            })
                        }
                        totalGames = 0
                        totalWins = 0
                    }
                }
                topLeagues = statistics.filter(league => league.total_games_goals > minimNuberOfGames).sort((a,b) => b.win_percentage_goals-a.win_percentage_goals).slice(0,topReturnedValues)
                for (let entry in topLeagues){
                    topLeagues[entry].total_win_percentage = topLeagues[entry].win_percentage_goals
                    topLeagues[entry].total_games = topLeagues[entry].total_games_goals
                    topLeagues[entry].total_win = topLeagues[entry].win_goals
                }
                return [topCountry.sort((a,b) => b.total_win_percentage-a.total_win_percentage).slice(0,topReturnedValues), topLeagues]
            default:
                return null
        }
}


const Tops = ({statistics}) => {
    const topOptions = [10, 5, 15]
    const countryLeagueOptions = ['Country', 'League']
    const gameTypeOption = ['All', 'Result', 'Goals']

    const initialValues = {
        top: 10,
        countryLeague: 'Country',
        gameType: 'All',
        overGames: 100
    }
    
    const ACTION_TYPES = {
        CHANGE_TOP: 'change_top',
        CHANGE_COUNTRYLEAGUE: 'change_countryleague',
        CHANGE_GAMETYPE:'change_gametype',
        CHANGE_OVERGAMES: 'change_overgames'
    }
    
    const reducer = (state, action) => {
        switch(action.type){
            case ACTION_TYPES.CHANGE_TOP:
                return{
                    ...state,
                    top: action.new_selected_top
                }
            case ACTION_TYPES.CHANGE_COUNTRYLEAGUE:
                return{
                    ...state,
                    countryLeague: action.new_selected_country_league
                }
                case ACTION_TYPES.CHANGE_GAMETYPE:
                    return{
                    ...state,
                    gameType: action.new_selected_game_type
                }
                case ACTION_TYPES.CHANGE_OVERGAMES:
                    return{
                    ...state,
                    overGames: action.new_selected_over_games
                }
                default:
                    return state
                }
            }
            
            const onTopChange = (e) => {
                dispatch({
                    type:ACTION_TYPES.CHANGE_TOP,
            new_selected_top: e
        })
    }
    
    const onCountryLeagueChange = (e) => {
        dispatch({
            type:ACTION_TYPES.CHANGE_COUNTRYLEAGUE,
            new_selected_country_league: e
        })
    }
    
    const onGameTypeChange = (e) => {
        dispatch({
            type:ACTION_TYPES.CHANGE_GAMETYPE,
            new_selected_game_type:e
        })
    }
    
    const onOverGames = (e) => {
        dispatch({
            type:ACTION_TYPES.CHANGE_OVERGAMES,
            new_selected_over_games:e
        })
    }

    const [state, dispatch] = useReducer(reducer, initialValues)
    
    const topLeague = topCountryExtractor(statistics, state.overGames, state.top, state.gameType)[1]
    const topCountry = topCountryExtractor(statistics, state.overGames, state.top, state.gameType)[0]

    return (
        <div className="tops-container">
            <h2>Top winning percentage</h2>
            <h3>Top</h3>
            <TopWinnerPicker pickerOptions={topOptions} pickerChangeOption={onTopChange}/>
            <br/>
            <br/>
            <h3>By</h3>
            <TopWinnerPicker pickerOptions={countryLeagueOptions} pickerChangeOption={onCountryLeagueChange}/>
            <h3> and by</h3>
            <TopWinnerPicker pickerOptions={gameTypeOption} pickerChangeOption={onGameTypeChange}/>
            <br/>
            <br/>
            <h3>with over </h3>
            <NumericInput 
                min={state.countryLeague === 'Country' ? 60:40} 
                value={state.overGames}
                onChange={onOverGames} 
                step={state.countryLeague === 'Country' ? 20:10}
                className="numeric-input"
                />
            <h3> games</h3>
            <div className="prograss-bar-container">
                {
                    state.countryLeague === 'Country' ?
                    topCountry.map(entry => {
                        return <ProgressBar data={entry} key={entry.total_games + entry.country + entry.league}/>
                    })
                    :
                    topLeague.map(entry => {
                        return <ProgressBar data={entry} key={entry.total_games + entry.country + entry.league}/>
                    
                    })
                }
            </div>
        </div>
    )
}

export default Tops