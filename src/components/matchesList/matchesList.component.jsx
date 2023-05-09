import Match from '../match/match.component';
import {ReactComponent as NextPageArrow} from '../../assets/pagearrow-right.svg'
import {ReactComponent as PreviousPageArrow} from '../../assets/pagearrow-left.svg'
import './matchesList.styles.scss'
import { useState } from 'react';
import SortBy from '../sortBy/sortby.component';
import CategoryItem from '../category-item/category-item.component';

const MatchesList = (props) => {
  const [, setActiveDropDownItem] = useState("Playing hour")
  const [activePage, setActivePage] = useState(1)
  const [predictionsToRender, setPredictionsToRender] = useState('')

  const prePageCategories = [
    {
      id: 10,
      title: 'Goals Goals Goals',
      imageUrl : "GoalsImage",
    },
    {
      id: 11,
      title: '1 X 2',
      imageUrl : "1x2Image",
    },
]

  const separateDataByPrediction = (data) => {
    let on_goals = []
    let on_final_result = []
    for (const entry in data){
        if(data[entry].prediction === "1"){
            on_final_result.push(data[entry])
        }else if(data[entry].prediction === "2"){
            on_final_result.push(data[entry])
        }else if(data[entry].prediction === "X"){
            on_final_result.push(data[entry])
        }else on_goals.push(data[entry])
    }
    return [on_goals, on_final_result]
  }

  let matches = separateDataByPrediction(props.matches)

  const handleActiveDropDownItem = (newMatches) => {
     setActiveDropDownItem(newMatches)
     switch(newMatches){
       case "Odd":
          props.matches.sort((a,b) => (a.odd > b.odd) ? 1 : ((b.odd > a.odd) ? -1 : 0));
          setActivePage(1)
          break;
       case "Win Chance":
          props.matches.sort((a,b) => b.score_difference - a.score_difference);
          setActivePage(1)
          break;
       case "Country":
          props.matches.sort((a,b) => (a.country > b.country) ? 1 : ((b.country > a.country) ? -1 : 0));
          setActivePage(1)
          break;
       default:
          props.matches.sort((a,b) => (a.playing_hour > b.playing_hour) ? 1 : ((b.playing_hour > a.playing_hour) ? -1 : 0));
          setActivePage(1)
       }
      }

      
  const handlePredictionCategory = (x) => {
    setPredictionsToRender(x)
    setActivePage(1)
  }
      
  let matchesToRender
  let totalPages
    switch (predictionsToRender){
      case "Goals Goals Goals":
        matchesToRender = matches[0]
        totalPages = Math.ceil(matchesToRender.length/10)
        break
      case "1 X 2":
        matchesToRender = matches[1]
        totalPages = Math.ceil(matchesToRender.length/10)
        break
      default:
        matchesToRender = null
  }
                
  const handlePages = (incerement) => {
    if ((activePage+incerement >= 1) && (activePage+incerement <= totalPages)){
      setActivePage(activePage+incerement)
    }
  }
        
  return (
    <div className='matches-list'>
        <div className='predictions-to-render'> 
          <CategoryItem key={prePageCategories[1].id} category={prePageCategories[1]} handlePredictionCategory={handlePredictionCategory}/>
          <CategoryItem key={prePageCategories[0].id} category={prePageCategories[0]} handlePredictionCategory={handlePredictionCategory}/>

      </div>
      {matchesToRender ? 
      <div>
        <div className='pagination-sort'>
          <div></div>
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
{        matchesToRender.slice(activePage * 10 - 10, activePage * 10).map((match) => (
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
      
      :
      <h2>Select a category from above</h2>}
    </div>
  );
};

export default MatchesList;
