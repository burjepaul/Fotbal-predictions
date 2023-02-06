import Match from '../match/match.component';
import {ReactComponent as DropDownArrow} from '../../assets/dropdown-arrow.svg'
import './matchesList.styles.scss'
import { useState } from 'react';

const MatchesList = (props) => {

  const dropDownText = ["Playing hour", "Win Chance", "Odd", "Country"]

  const [dropDown, setDropDown] = useState(false)
  const [dropDownClass, setDropDownClass] = useState("drop-down-menu hide")
  const [activeDropDown, setActiveDropDown] = useState(dropDownText)
  const [activeDropDownItem, setActiveDropDownItem] = useState(dropDownText[0])

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
    setActiveDropDownItem(activeDropDown[0])
  }
  const handleDropDownItem2 = () => {
    const temp = activeDropDown[0]
    activeDropDown[0] = activeDropDown[2]
    activeDropDown[2] = temp
    setActiveDropDown(activeDropDown)
    setDropDown(!dropDown)
    setDropDownClass("drop-down-menu hide")
    setActiveDropDownItem(activeDropDown[0])
  }
  const handleDropDownItem3 = () => {
    const temp = activeDropDown[0]
    activeDropDown[0] = activeDropDown[3]
    activeDropDown[3] = temp
    setActiveDropDown(activeDropDown)
    setDropDown(!dropDown)
    setDropDownClass("drop-down-menu hide")
    setActiveDropDownItem(activeDropDown[0])
  }

  switch(activeDropDownItem){
    case "Odd":
      props.matches.sort((a,b) => (a.odd > b.odd) ? 1 : ((b.odd > a.odd) ? -1 : 0));
      break;
    case "Win Chance":
      props.matches.sort((a,b) => b.score_difference - a.score_difference);
      break;
    case "Country":
      props.matches.sort((a,b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0));
      break;
    default:
      props.matches.sort((a,b) => (a.playing_hour > b.playing_hour) ? 1 : ((b.playing_hour > a.playing_hour) ? -1 : 0));

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
