import "./statistics-circle.styles.scss"
import { ReactComponent as CircleSvg } from "../../assets/circle.svg"

const Circle = ({oddStats}) => {
    let percent = (oddStats.Total_wins/oddStats.Total_games)*270 + '%'
    return (
        <div className="container">
            <div className="outer">
                <div className="inner">
                    <div className="number">
                        <h2>
                        {oddStats.Total_wins}/{oddStats.Total_games}
                        </h2>
                        <br></br>
                        <h2>
                        {((oddStats.Total_wins/oddStats.Total_games)*100).toFixed(0)} %
                        </h2>
                    </div>
                </div>
            </div>
            <CircleSvg style={{"--percent-value": percent}}/>
        </div>
    )
}

export default Circle