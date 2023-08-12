import ProgressBar from "@ramonak/react-progress-bar"
import './detailProgressBar.styles.scss'

const DetailProgressBar = ({percent}) => {
    let hslValue
    percent ?
    hslValue = 120*percent/100
    :
    hslValue = 0
    
    return (
        <ProgressBar 
            completed={percent} 
            borderRadius='5px'
            className='detail-progrssbar'
            width='100%'
            height='3vh'
            bgColor={`hsl(${hslValue}, 100%, 50%)`}
            baseBgColor="rgb(136, 16, 16)"
            labelClassName="label"
            customLabel={`${percent.toFixed(1)}%`}
        />
    )
}

export default DetailProgressBar