import { Link, Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

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
        <Directory categories={categories}/>
        <Link to={'/privacy-policy'}>
        <h1>Privacy</h1>
        </Link>
    </div>
  );
}

export default Home