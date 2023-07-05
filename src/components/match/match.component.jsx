import { Fragment } from 'react';
import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg'
import {ReactComponent as ArrowUp} from '../../assets/arrow-up.svg'
import './match.styles.scss'
import { useState } from 'react';
import MatchDetails from '../matchDetalis/matchDetails';

const Match = (props) => {
  const [displayDetails, setDisplayDetails] = useState(false)

  const {playing_date, playing_hour, country, league, home_team, away_team, prediction, odd, result} = props

  let formatPrediction
  if(prediction === "1")
    formatPrediction = <h4>{home_team} to win</h4>
  else if(prediction === "2")
    formatPrediction = <h4>{away_team} to win</h4>
  else if(prediction[0] === "1")
    formatPrediction = <h4>{home_team} {prediction.slice(1)} goals</h4>
  else if(prediction[0] === "2")
    formatPrediction = <h4>{away_team} {prediction.slice(1)} goals</h4>
  else{
    formatPrediction = <h4>{prediction} goals</h4>
  }
    return (
      <>
      <div className='match-header'>
        <div className='match-header-nodetails'>
          <div 
            className='flag-image'
            style= {{
              backgroundImage: 'url(' + require(`../../assets/flag/${country}.png`) + ')'                
            }}   
            />
          <h3>{country} - {league}</h3>
          <div className="gameArrows">
            {displayDetails ? <ArrowUp onClick={() => setDisplayDetails(!displayDetails)}/> : <ArrowDown onClick={() => setDisplayDetails(!displayDetails)}/>}
          </div>
        </div>
        {displayDetails ? <MatchDetails country={country} league={league} prediction={prediction}/> : null}
        </div>

        <div className='match' 
            style={ result === undefined ? {backgroundColor: "var(--color-components)"} : 
            result === 'WIN' ? {backgroundColor: "var(--color-win)"} : 
            result === 'LOST'? {backgroundColor: "var(--color-lost)"}:
            {backgroundColor: "var(--color-postponed)"}
            }  
            >
          <div className='match-content'>
            <div  className='date'>
              <h5>{playing_date} at {playing_hour}</h5>
            </div>
            
            <div className='matchDetails'>
              <h4>{home_team} - {away_team}</h4>
                <div className='prediction'>
                  {formatPrediction}
                </div>
            </div>
      
            <div className='predictionodd'>
              <div className='odd'>
                {odd === undefined || odd === 0 ? 
                null :
                <Fragment>
                    <h4>{odd === 0 ? '-':odd}</h4>
                </Fragment>
              }
              </div>
              <div className='result'>
                {result === undefined ? 
                null :
                  <Fragment>
                    <h4>{result}</h4>
                  </Fragment>
                }
              </div>
          </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Match;