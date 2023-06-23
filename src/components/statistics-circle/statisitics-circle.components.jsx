import "./statistics-circle.styles.scss"
import { ReactComponent as CircleSvg } from "../../assets/circle.svg"

const Circle = ({leagueStats}) => {
    let percent = 270 - (leagueStats.total_win/leagueStats.total_games)*270 + '%'
    return (
        <div className="container">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        <h2>
                        {leagueStats.total_win}/{leagueStats.total_games}
                        </h2>
                        <br></br>
                        <h2>
                        {((leagueStats.total_win/leagueStats.total_games)*100).toFixed(0)} %
                        </h2>
                    </div>
                </div>
            </div>
            <CircleSvg style={{"--percent-value": percent}}/>
            {leagueStats.average_odd_win ? <h4>Average odd win: {leagueStats.average_odd_win.toFixed(2)}</h4> : ''}
            {leagueStats.average_odd_lost ? <h4>Average odd lost: {leagueStats.average_odd_lost.toFixed(2)}</h4> : ''}
        </div>
    )
}

export default Circle