import ProgressBar from '../progrssbar/progressbar.component'
import './topWinnersEntry.styles.scss'

const TopWinnersEntry = ({winner}) => {
    return(
        <div className='winner-entry'>
            <h4 className='country'>{winner.country} {winner.league ? ' - ' + winner.league : ''}</h4>
            <ProgressBar percentage={winner.percentage}/>
            <h4 className='games-played'>of {winner.total_games} games played</h4>
        </div>
    )
}

export default TopWinnersEntry