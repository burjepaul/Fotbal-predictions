import './match.styles.scss'

const TodayMatch = (props) => {
  const {playing_date, playing_hour, country, league, home_team, away_team, prediction, odd} = props
    return (
      <div className='match'>
        <div  className='date'>
          <h5>{playing_date} at {playing_hour}</h5>
        </div>
  
        <div className='matchDetails'>
          <h3>{country} - {league}</h3>
          <h4>{home_team} - {away_team}</h4>
        </div>
  
        <div className='predictionodd'>
          <div className='prediction'>
            <h3>Prediction</h3>
            <h4>{prediction}</h4>
          </div>
          {odd ? 
            <div className='odd'>
              <h3>Odd</h3>
              <h4>{odd === 0 ? '-':odd}</h4>
            </div>
          :
          null
          }
        </div>
      </div>
    );
  };
  
  export default TodayMatch;