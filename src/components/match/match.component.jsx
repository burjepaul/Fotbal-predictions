/* eslint-disable eqeqeq */
import { Fragment } from 'react';
import './match.styles.scss'

const Match = (props) => {
  const {playing_date, playing_hour, country, league, home_team, away_team, prediction, odd, result} = props
    return (
      <div className='match' 
           style={ result == undefined ? {backgroundColor: "var(--color-components)"} : 
                  result === 'WIN' ? {backgroundColor: "var(--color-win)"} : 
                  result === 'LOST'? {backgroundColor: "var(--color-lost)"}:
                  {backgroundColor: "var(--color-postponed)"}
                }  
        >
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
          <div className='odd'>
            {odd == undefined ? 
            null :
              <Fragment>
                <h3>Odd</h3>
                <h4>{odd === 0 ? '-':odd}</h4>
              </Fragment>
          }
            </div>
           <div className='result'>
            {result == undefined ? 
            null :
              <Fragment>
                <h3>Result</h3>
                <h4>{result}</h4>
              </Fragment>
            }
            </div>
        </div>
      </div>
    );
  };
  
  export default Match;