import './todayMatch.styles.scss'

const TodayMatch = (props) => {
    return (
      <div className='match'>
        <div  className='date'>
          <h5>{props.playing_date} at {props.playing_hour}</h5>
        </div>
  
        <div className='matchDetails'>
          <h3>{props.country} - {props.league}</h3>
          <h4>{props.home_team} - {props.away_team}</h4>
        </div>
  
        <div className='predictionodd'>
          <div className='prediction'>
            <h3>Prediction</h3>
            <h4>{props.prediction}</h4>
          </div>
          <div className='odd'>
            <h3>Odd</h3>
            <h4>{props.odd === 0 ? '-':props.odd}</h4>
          </div>
        </div>
      </div>
    );
  };
  
  export default TodayMatch;