import { useState, useEffect } from "react";
import Spinner from "../../../components/spinner/spinner";
import "./tops.styles.scss"
import TopWinnersEntry from "./topWinnersEntry/topWinnersEntry.component";

const Tops = () => {
    const options = ['Country', 'League', "Draws", 'Team', 'Home Team', 'Away Team'];

    const [querry, setQuerry] = useState(options[0])
    const [topWinners, setTopWinners] = useState()
    
    const onOptionChangeHandler = (e) => {
        setQuerry(e.target.value)
    }
    
    useEffect(() => {
        const optionsToQuerry ={
            'Country': 'get_tops_countries',
            'League': 'get_tops_leagues',
            'Draws': 'get_tops_draws',
            'Team': 'get_tops_teams',
            'Home Team': 'get_tops_home_teams',
            'Away Team': 'get_tops_away_teams'
        }
        const fetchOddQuery =async () => {
            setTopWinners(undefined)
            const response = await fetch(`https://fotbal.herokuapp.com/matches/statistics/?${optionsToQuerry[querry]}=True`)
            if (!response.ok){
                throw new Error('Something went wrong!')
            }
            const data = await response.json();
            setTopWinners(data)
        }

        fetchOddQuery()
    },[querry])
    
    return (
        <div className="tops-container">
            <h2>Top winners</h2>
            <h3>Find top winner percentage by: </h3>
            <select onChange={onOptionChangeHandler}>
                        {options.map((option, index) => {
                            return <option key={index} >
                                        {option}
                                    </option>
                            })}
            </select>
            {
            topWinners ? 
                <div className="top-winners-container">
                    {topWinners.map((winner) => {
                        return <TopWinnersEntry key={winner.percentage ? winner.total_games+winner.league : winner.home_team ? winner.home_team: winner.away_team} winner={winner}/>
                    })}
                </div>
            :
                <Spinner/>
            }
        </div>
    )
}

export default Tops