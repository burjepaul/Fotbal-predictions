import { Fragment } from 'react';

import { convertToUTC } from '../../config/helpers';
import MatchDetails from '../matchDetalis/matchDetails';

import {ReactComponent as ArrowDown} from '../../assets/arrow-down.svg'
import {ReactComponent as ArrowUp} from '../../assets/arrow-up.svg'
import Checked from '../../assets/checked.png'
import XMark from '../../assets/XMark.png'
import Postponed from '../../assets/postponedImage.png'

import './match.styles.scss'

const Match = (props) => {
  const {id, playing_date, playing_hour, country, league, home_team, away_team, prediction, odd, result, displayDetailsForID, setDisplayDetailsForID} = props

  const utcTime = convertToUTC(playing_date, playing_hour)

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
            {
            displayDetailsForID === id ?
              <ArrowUp onClick={() => {
                setDisplayDetailsForID(0)
              }}/> 
              :
              <ArrowDown onClick={() => {
                setDisplayDetailsForID(id)
              }}/>
            
            }
          </div>
        </div>
        {
        displayDetailsForID === id ? 
            <MatchDetails country={country} league={league} prediction={prediction}/> 
          : 
            null
        }
        </div>

        <div className='match'>
          <div className='match-content'>
            
            <div  className='date'>
              <h5>{utcTime[0]} at {utcTime[1]}</h5>
            </div>
            
            <div className='matchDetails'>
              <h4>{home_team} - {away_team}</h4>
                <div className='prediction'>
                  {formatPrediction}
                </div>
            </div>
      
            <div className='predictionodd'
              style={
                result === undefined ? 
                {display:"inline"}
                :
                {display:"flex"}
              }
            >
                <div className='odd'>
                  {odd === undefined || odd === 0 ? 
                  null :
                      <h4>{odd === 0 ? '-':odd}</h4>
                }
                </div>

                  {result === undefined ? 
                  null :
                  <>
                    {result === 'WIN' ? <img className='lost-won-image' alt='WIN' src={Checked}/>: <></>}
                    {result === 'LOST' ? <img className='lost-won-image' alt='WIN' src={XMark}/>: <></>}
                    {result === 'POSTPONED' ? <img className='lost-won-image' alt='WIN' src={Postponed}/>: <></>}
                  </>
                    }
            </div>

          </div>
        </div>
      </>
    );
  };
  
  export default Match;