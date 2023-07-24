import {Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import ReactPlayer from 'react-player'
import video1 from '../../assets/LogoVideo.mp4'

import './home.styles.scss'

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

  return (
    <div>
        <Outlet/>
        <div className='main-header'>
          <ReactPlayer url={video1} height={"50vh"} width={"70vw"} loop={true} playing={true} muted={true}/>
          <h1>Professional Auto-Generated Football Predictions</h1>
        </div>
        <Directory categories={categories}/>
        <Outlet/>
    </div>
  );
}

export default Home