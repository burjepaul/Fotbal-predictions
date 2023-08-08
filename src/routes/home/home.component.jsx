import {Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

import videoFirstMp4 from '../../assets/LogoFirst.mp4'
import videoFirstWebm from '../../assets/LogoFirst.webm'
import videoSecondMp4 from '../../assets/LogoSecond.mp4'
import videoSecondWebm from '../../assets/LogoSecond.webm'
import {ReactComponent as GooglePlaySvg} from '../../assets/google-play.svg'
import {ReactComponent as HuaweiSvg} from '../../assets/huawei.svg'

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

          <div className='video-container'>

            <video autoPlay={true} muted={true} style={{display: loopVideo ? "block" : "none"}} onEnded={() => setLoopVideo(false)}>
              <source src={videoFirstWebm} type="video/webm" />
              <source src={videoFirstMp4} type="video/mp4" />
            </video>

            <video autoPlay={true} muted={true} loop={true} style={{display: loopVideo ? "none" : "block"}}>
              <source src={videoSecondWebm} type="video/webm" />
              <source src={videoSecondMp4} type="video/mp4" />
            </video>

            <div className='mobile-logos'>

              <a href="https://play.google.com/store/apps/details?id=com.fotbal.predictions" target="_blank" rel="noreferrer">
                <button className='app-button'> <GooglePlaySvg/> <p>Google Play</p></button>
              </a>
              <a href="https://appgallery.huawei.com/app/C108277163" target="_blank" rel="noreferrer">
                <button className='app-button'><HuaweiSvg/> <p>App Gallery</p></button>
              </a>
              
            </div>

        </div>
          
          <h1>Auto-Generated Football Tips, <br></br>Using Binary Power</h1>
        </div>

        <Directory categories={categories}/>
        <Outlet/>
    </div>
  );
}

export default Home