import Match from '../match/match.component';
import {ReactComponent as DropDownArrow} from '../../assets/dropdown-arrow.svg'
import './matchesList.styles.scss'
import { useState } from 'react';

const MatchesList = (props) => {

  const dropDownText = ["Playing hour", "Win Chance", "Odd", "Country"]

  const [dropDown, setDropDown] = useState(false)
  const [dropDownClass, setDropDownClass] = useState("drop-down-menu hide")
  const [activeDropDown, setActiveDropDown] = useState(dropDownText)

  const handleDropDown = () => {
    if (!dropDown){
      setDropDown(!dropDown)
      setDropDownClass("drop-down-menu visible")
    }else{
      setDropDown(!dropDown)
      setDropDownClass("drop-down-menu hide")
    }
  }

  const handleDropDownItem1 = () => {
    const temp = activeDropDown[0]
    activeDropDown[0] = activeDropDown[1]
    activeDropDown[1] = temp
    setActiveDropDown(activeDropDown)
    setDropDown(!dropDown)
    setDropDownClass("drop-down-menu hide")
  }
  const handleDropDownItem2 = () => {
    const temp = activeDropDown[0]
    activeDropDown[0] = activeDropDown[2]
    activeDropDown[2] = temp
    setActiveDropDown(activeDropDown)
    setDropDown(!dropDown)
    setDropDownClass("drop-down-menu hide")
  }
  const handleDropDownItem3 = () => {
    const temp = activeDropDown[0]
    activeDropDown[0] = activeDropDown[3]
    activeDropDown[3] = temp
    setActiveDropDown(activeDropDown)
    setDropDown(!dropDown)
    setDropDownClass("drop-down-menu hide")
  }


  return (
    <div className='matches-list'>
      <div className='sort-component'>
        <h2>Sort by :&nbsp;&nbsp;
          <button onClick={handleDropDown}><DropDownArrow/>&nbsp;&nbsp;{activeDropDown[0]}</button>
        <div className={dropDownClass}>
          <div className='drop-down-item' onClick={handleDropDownItem1}>{activeDropDown[1]}</div>
          <div className='drop-down-item' onClick={handleDropDownItem2}>{activeDropDown[2]}</div>
          <div className='drop-down-item' onClick={handleDropDownItem3}>{activeDropDown[3]}</div>
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
