import ProgressBar from '../progrssbar/progressbar.component'
import './topWinnersEntry.styles.scss'

const TopWinnersEntry = ({winner}) => {
    return(
        <div className='winner-entry'>
            {winner.percentage ? 
                <div className='for-percentage'>
                    <h4 className='country'>{winner.country} {winner.league ? ' - ' + winner.league : ''}</h4>
                    <ProgressBar percentage={winner.percentage}/>
                    <h4 className='games-played'>of {winner.total_games} games played</h4>
                </div>
                :
                <div className='for-nonpercentage'>
                    <h4>{winner.country} {winner.league ? ' - ' + winner.league : ''}:</h4>
                    <h4 className='winner-team'> {winner.home_team ? winner.home_team : winner.away_team}</h4>
                    <h4> {winner.total_games} matches</h4>
                </div>
        }
        </div>
    )
}

export default TopWinnersEntry