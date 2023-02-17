import Match from '../match/match.component';
import {ReactComponent as NextPageArrow} from '../../assets/pagearrow-right.svg'
import {ReactComponent as PreviousPageArrow} from '../../assets/pagearrow-left.svg'
import './matchesList.styles.scss'
import { useState } from 'react';
import SortBy from '../sortBy/sortby.component';

const MatchesList = (props) => {
  const [, setActiveDropDownItem] = useState("Playing hour")
  const [activePage, setActivePage] = useState(1)

  const handleActiveDropDownItem = (newMatches) => {
     setActiveDropDownItem(newMatches)
     switch(newMatches){
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
      }

  let totalPages = Math.ceil(props.matches.length/10)

  const handlePages = (incerement) => {
    if ((activePage+incerement >= 1) && (activePage+incerement <= totalPages)){
      setActivePage(activePage+incerement)
    }
  }

  return (
    <div className='matches-list'>
      <div className='mathclist-header'>
            <div className="title"></div>
            <div className='pagination'>
                <div className='arrows' onClick={() => handlePages(-1)}>
                    <PreviousPageArrow/>
                </div>
                <h2 className="title">Page&nbsp;&nbsp;</h2>
                <h2 className="title">{activePage}/{totalPages}</h2>
                <div className='arrows' onClick={() => handlePages(+1)}>
                  <NextPageArrow/>
                </div>
            </div>
        <SortBy matches={props.matches} handleActiveDropDownItem={handleActiveDropDownItem}/>
      </div>
      {props.matches.slice(activePage * 10 - 10, activePage * 10 - 1).map((match) => (
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
