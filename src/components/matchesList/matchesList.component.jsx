import React from 'react';
import { useEffect, useRef, useState } from 'react';
import Match from '../match/match.component';
import {ReactComponent as NextPageArrow} from '../../assets/pagearrow-right.svg'
import {ReactComponent as PreviousPageArrow} from '../../assets/pagearrow-left.svg'
import papirusLandingMp4 from '../../assets/papirusVideo.mp4'
import papirusLandingWebm from '../../assets/papirusVideo.webm'
import papirusLandingOgv from '../../assets/papirusVideo.ogv'
import SortBy from '../sortBy/sortby.component';
import CategoryItem from '../category-item/category-item.component';
import './matchesList.styles.scss'

const MatchesList = React.forwardRef((props, ref) => {
  const [, setActiveDropDownItem] = useState("Playing hour")
  const [activePage, setActivePage] = useState(1)
  const [predictionsToRender, setPredictionsToRender] = useState('')
  const [hasVideoEnded, setHasVideoEnded] = useState(false)
  const [displayDetailsForID, setDisplayDetailsForID] = useState(0)
  
  const categoryItemRef = useRef(null)

  useEffect(() => {
    const scrollToTarget = () => {
      if (categoryItemRef.current) {
        // Get the position of the target div relative to the viewport
        const targetPosition = categoryItemRef.current.getBoundingClientRect().top;

        // Perform the smooth scroll
        window.scrollTo({
          top: targetPosition + window.scrollY,
          behavior: 'smooth',
        });
      }
    };

    // Scroll to the target div only if it exists
    scrollToTarget();
  }, []);


  const prePageCategories = [
    {
      id: 10,
      title: 'On Goals',
      imageUrl : "GoalsImage",
    },
    {
      id: 11,
      title: 'On Winners',
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
      case "On Goals":
        matchesToRender = matches[0]
        totalPages = Math.ceil(matchesToRender.length/10)
        break
      case "On Winners":
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
        <div className='predictions-to-render' ref={ categoryItemRef}> 
          <CategoryItem key={prePageCategories[1].id} category={prePageCategories[1]} handlePredictionCategory={handlePredictionCategory}/>
          <CategoryItem key={prePageCategories[0].id} category={prePageCategories[0]} handlePredictionCategory={handlePredictionCategory}/>
        </div>
      
      <div className='video-container'>
        <video autoPlay={true} muted={true} onEnded={()=>{setHasVideoEnded(true)}}>
          <source src={papirusLandingWebm} type="video/webm"/>
          <source src={papirusLandingMp4} type="video/mp4"/>
          <source src={papirusLandingOgv} type="video/ogg"/>
        </video>
      </div>
      {hasVideoEnded ?
        <>
          {matchesToRender  ? 
            <div className='list-of-matches'>

              <div className='pagination-sort'>
                <SortBy matches={props.matches} handleActiveDropDownItem={handleActiveDropDownItem}/>
              </div>

              {matchesToRender.slice(activePage * 10 - 10, activePage * 10).map((match) => (
                <Match
                  key={match.id}
                  id={match.id}
                  playing_date={match.playing_date}
                  country={match.country}
                  league={match.league}
                  home_team={match.home_team}
                  away_team={match.away_team}
                  prediction={match.prediction}
                  odd={match.odd}
                  playing_hour={match.playing_hour}
                  result={match.result}
                  displayDetailsForID = {displayDetailsForID}
                  setDisplayDetailsForID = {setDisplayDetailsForID}
                />
                ))}
                
                <div className='pagination'>
                
                  <div className='arrows' onClick={() => handlePages(-1)}>
                  <PreviousPageArrow/>
                  </div>
                  
                  <p className="page-title">Page&nbsp;&nbsp;</p>
                  <p className="page-title">{activePage}/{totalPages}</p>
                  
                  <div className='arrows' onClick={() => handlePages(+1)}>
                  <NextPageArrow/>
                  </div>
                  
                </div>
                
            </div>
            :
            <div className='select-text'>
              <h2>Select a category from above</h2>
            </div>
            }
        </>
            :
            <></>
          }
    </div>
  );
});
    

export default MatchesList;
