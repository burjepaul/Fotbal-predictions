import {Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import videoFirstMp4 from '../../assets/LogoFirst.mp4'
import videoFirstWebm from '../../assets/LogoFirst.webm'

import videoSecondMp4 from '../../assets/LogoSecond.mp4'
import videoSecondWebm from '../../assets/LogoSecond.webm'

import './home.styles.scss'
import { useState } from 'react';

function Home() {
  const categories = [
    {
      id: 1,
      title: 'Yesterday Results',
      imageUrl : "YesterdayImage",
      path: '/yesterdayResults'
    },
    {
      id: 2,
      title: 'Today Matches',
      imageUrl : "TodayImage",
      path: '/todayMatches'
    },
    {
      id: 3,
      title: 'Tomorrow Predictions',
      imageUrl : "TomorrowImage",
      path: '/tomorrowPredictions'
    },
    {
      id: 4,
      title: 'Result History',
      imageUrl : "HistoryImage",
      path: "/resultHistory"
    },
    {
      id: 5,
      title: 'Statistics',
      imageUrl : "StatisticsImage",
      path : '/statistics'
    },
  ]

  const [loopVideo, setLoopVideo] = useState(true)

  return (
    <div>
        <Outlet/>
        <div className='main-header'>

          <video autoPlay={true} muted={true} style={{display: loopVideo ? "block" : "none"}} onEnded={() => setLoopVideo(false)}>
            <source src={videoFirstWebm} type="video/webm" />
            <source src={videoFirstMp4} type="video/mp4" />
          </video>

          <video autoPlay={true} muted={true} loop={true} style={{display: loopVideo ? "none" : "block"}}>
            <source src={videoSecondWebm} type="video/webm" />
            <source src={videoSecondMp4} type="video/mp4" />
          </video>
          
          <h1>Auto-Generated Football Tips</h1>
        </div>
        <Directory categories={categories}/>
        <Outlet/>
    </div>
  );
}

export default Home