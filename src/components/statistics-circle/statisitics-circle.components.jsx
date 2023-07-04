import "./statistics-circle.styles.scss"
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Circle = ({leagueStats}) => {
    let hslValue
    leagueStats.total_win_percentage ?
    hslValue = 120*leagueStats.total_win_percentage/100
    :
    hslValue = 0

    return (
        <>
            <CircularProgressbarWithChildren value={leagueStats.total_win_percentage ? leagueStats.total_win_percentage.toFixed(2) : 0}
                styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                        // Path color
                        stroke: `hsl(${hslValue}, 100%, 50%)`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',
                    // Customize transition animation
                    transition: 'stroke-dashoffset 1.5s ease 0s',
                    // Rotate the path
                    transformOrigin: 'center center',
                },
                // Customize the circle behind the path, i.e. the "total progress"
                trail: {
                    // Trail color
                    stroke: 'red',
                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'butt',
                    // Rotate the trail
                    transform: 'rotate(0.25turn)',
                    transformOrigin: 'center center',
                },
                // Customize the text
                text: {
                    // Text color
                    fill: `hsl(${hslValue}, 100%, 50%)`,
                    // Text size
                    fontSize: '15px',
                },
                // Customize background - only used when the `background` prop is true
                background: {
                    fill: '#3e98c7',
                },
            }}>
                <h2 style={{color:`hsl(${hslValue}, 100%, 50%)`, margin:0}}>{leagueStats.total_win_percentage ? leagueStats.total_win_percentage.toFixed(2) : 0} %</h2>
                <h2 style={{color:`hsl(${hslValue}, 100%, 50%)`, margin:0}}>{leagueStats.total_win}/{leagueStats.total_games}</h2>
            </CircularProgressbarWithChildren>
            {leagueStats.average_odd_win ? 
                <>
                    <p style={{color:"wheat"}}>Average Odd Win: {leagueStats.average_odd_win.toFixed(2)}</p>
                </> 
                : 
                <></>
            }{leagueStats.average_odd_lost ? 
                <>
                    <p style={{color:"wheat"}}>Average Odd Win: {leagueStats.average_odd_lost.toFixed(2)}</p>
                </> 
                : 
                <></>
            }

        </>
    )
}

export default Circle