import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import YesterdayResults from "./routes/yesterdayResults/yesterdayResults.component";
import TomorrowPredictions from "./routes/tomorrowPredictions/tomorrowPredictions.component";
import ResultHistory from "./routes/resultHistory/resultHistory.component";
import Statistics from "./routes/statistics/statistics.component";
import TodayMatches from "./routes/todayMatches/todayMathcesPage/todayMatches.component";
import Aboutus from "./routes/aboutus/aboutus.component";
import Forum from "./routes/forum/forum.component";
import Contact from "./routes/contact/contact.component";
import SignIn from "./routes/signin/signin.component";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/yesterdayResults' element={<YesterdayResults/>}/>
        <Route path='/todayMatches' element={<TodayMatches/>}/>
        <Route path='/tomorrowPredictions' element={<TomorrowPredictions/>}/>
        <Route path='/resultHistory' element={<ResultHistory/>}/>
        <Route path='/statistics' element={<Statistics/>}/>
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Route>
    </Routes>
  );
}

export default App;
