import { useEffect, useState } from 'react'
import './progressbar.styles.scss'

const ProgressBar = ({percentage}) => {
    const [filled, setFilled] = useState(0)
    useEffect(() => {
        if (filled <= percentage){
            setTimeout(() => setFilled(prev => prev +=1), 30)
        }
    },[filled, percentage])

    return (
        <div className='progress-container'>
            <div className='progressbar'>
                <div style={{
                    height: "100%",
                    width: `${filled}%`,
                    backgroundColor: "var(--color-win)",
                    transition: "width 0.1s"
                }}></div>
                <h1 className='progressPercent'>{filled - 1}%</h1>
            </div>
        </div>
    )
}

export default ProgressBar