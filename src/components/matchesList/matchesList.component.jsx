import Match from '../match/match.component';
import {ReactComponent as DropDownArrow} from '../../assets/dropdown-arrow.svg'
import './matchesList.styles.scss'
import { useState } from 'react';

const MatchesList = (props) => {
  const [dropDown, setDropDown] = useState(false)
  const [dropDownClass, setDropDownClass] = useState("drop-down-menu hide")

  const handleDropDown = () => {
    if (!dropDown){
      setDropDown(!dropDown)
      setDropDownClass("drop-down-menu visible")
    }else{
      setDropDown(!dropDown)
      setDropDownClass("drop-down-menu hide")
    }
  }


  return (
    <div className='matches-list'>
      <div className='sort-component'>
        <h2>Sort by :&nbsp;&nbsp;
          <button onClick={handleDropDown}><DropDownArrow/> Playing hour</button>
        <div className={dropDownClass}>
          <div class='drop-down-item'>Win Chance</div>
          <div class='drop-down-item'>Odd</div>
          <div class='drop-down-item'>Country</div>
        </div>
        </h2>
      </div>
      {props.matches.map((match) => (
        <Match
          key={match.id}
          playing_date={match.playing_date}
          country={match.country}
          league={match.league}
          home_team={match.home_team}
          away_team={match.away_team}
          prediction={match.prediction}
          odd={match.odd}
          playing_hour={match.playing_hour}
          result={match.result}
        />
      ))}
    </div>
  );
};

export default MatchesList;
