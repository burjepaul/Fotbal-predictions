import {Outlet } from 'react-router-dom';
import { useState, useContext, useRef } from 'react';
import Directory from '../../components/directory/directory.component';
import { StatisticsContext } from '../../contexts/statistics.context'

import videoFirstMp4 from '../../assets/LogoFirst.mp4'
import videoFirstWebm from '../../assets/LogoFirst.webm'
import videoSecondMp4 from '../../assets/LogoSecond.mp4'
import videoSecondWebm from '../../assets/LogoSecond.webm'
import ballSystemVideo from '../../assets/ball-system.mp4'
import {ReactComponent as GooglePlaySvg} from '../../assets/google-play.svg'
import {ReactComponent as HuaweiSvg} from '../../assets/huawei.svg'

import './home.styles.scss'
import { OpacityPercentage } from '../../config/helpers';

function Home() {
  const {statistics} = useContext(StatisticsContext)
  const elementRef = useRef(null)

  const percentageToShow = OpacityPercentage(elementRef)

  let total_wins = 0
  let total_lost = 0

  if (statistics){
    total_wins = statistics.reduce((acc, obj) => {
      return acc + obj.total_win
    }, 0)
    total_lost = statistics.reduce((acc, obj) => {
      return acc + obj.total_lost
    }, 0)
  }

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
        <div className='statistics-hero' 
            ref={elementRef}
            style= {{
              opacity:`${percentageToShow ? percentageToShow : 0}%`
          }} 
          >
            <h2>Empowering bettors with efficient football predictions. Our platform offers curated data, automated analysis, and trends, reducing time spent on research and enhancing betting strategies for success.</h2>
            <div className='the-four-containers'>
              <div className='grid-item'>
                <h4>With a total of</h4> 
                <h1>{total_wins}</h1>
                <h4>games won</h4>
              </div>
              <div className='grid-item'>
                <h4>An average of</h4> 
                <h1>{(total_wins/(total_wins+total_lost)*100).toFixed(0)}%</h1>
                <h4>win percentage</h4>
              </div>
              <div className='grid-item'>
                <h4>Days with over</h4> 
                <h1>150</h1>
                <h4>tips</h4>
              </div>
              <div className='grid-item'>
                <h4>Highest odd win</h4> 
                <h1>7.92</h1>
                <h4>on 26 May 2023</h4>
              </div>
            </div>
        </div>
        <div className='ball-system'>
          <video autoPlay={true} muted={true} loop={true} playbackRate={0.5}>
              <source src={ballSystemVideo} type="video/mp4" />
          </video>
          <div></div>
          <h2>My football predictions cover global leagues, from English Premier League to the bottom leagues of all world's countries.</h2>
        </div>
        <Outlet/>
    </div>
  );
}

export default Home