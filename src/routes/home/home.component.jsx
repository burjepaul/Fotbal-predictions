import {Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import video1 from '../../assets/LogoFirst.mp4'
import video2 from '../../assets/LogoFirst.webm'

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
          <video autoPlay={true} muted={true}>
            <source src={video2} type="video/webm" />
            <source src={video1} type="video/mp4" />
          </video>
          <h1>Professional Auto-Generated Football Tips</h1>
        </div>
        <Directory categories={categories}/>
        <Outlet/>
    </div>
  );
}

export default Home