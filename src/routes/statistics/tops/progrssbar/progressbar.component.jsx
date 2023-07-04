import { useEffect, useState } from 'react'
import './progressbar.styles.scss'

const ProgressBar = ({data}) => {
    const [filled, setFilled] = useState(0)

    let hslValue
    data.total_win_percentage ?
    hslValue = 120*data.total_win_percentage/100
    :
    hslValue = 0

    useEffect(() => {
        if (filled <= data.total_win_percentage){
            setTimeout(() => setFilled(prev => prev +=1), 30)
        }
    },[filled, data])

    return (
        <div className='progress-container'>
            {data.league ? 
                <div className='progress-country-league'>
                    <p>{data.country}</p>
                    <p>{data.league}</p>
                </div>
                :
                <div className='progress-country-league'>
                    <p>{data.country}</p>
                </div>
            }
            <div className='progressbar'>
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: `hsl(${hslValue}, 100%, 50%)`,
                    transition: "width 0.1s"
                }}></div>
                <h1 className='progressPercent'>{filled - 1}%</h1>
            </div>
            <div className='games-text'>
                <p>{data.total_win} of {data.total_games} <br></br>games won</p>
            </div>
        </div>
    )
}

export default ProgressBar