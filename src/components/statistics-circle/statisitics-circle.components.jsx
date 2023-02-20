import "./statistics-circle.styles.scss"
import { ReactComponent as CircleSvg } from "../../assets/circle.svg"

const Circle = ({oddStats}) => {
    let percent = (oddStats.total_wins/oddStats.total_games)*270 + '%'
    return (
        <div className="container">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        <h2>
                        {oddStats.total_wins}/{oddStats.total_games}
                        </h2>
                        <br></br>
                        <h2>
                        {((oddStats.total_wins/oddStats.total_games)*100).toFixed(0)} %
                        </h2>
                    </div>
                </div>
            </div>
            <CircleSvg style={{"--percent-value": percent}}/>
            {oddStats.average_odd_win ? <h4>Average odd win: {oddStats.average_odd_win}</h4> : ''}
            {oddStats.average_odd_lost ? <h4>Average odd lost: {oddStats.average_odd_lost}</h4> : ''}
        </div>
    )
}

export default Circle