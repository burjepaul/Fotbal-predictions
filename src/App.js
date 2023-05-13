import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import YesterdayResults from "./routes/yesterdayResults/yesterdayResults.component";
import TomorrowPredictions from "./routes/tomorrowPredictions/tomorrowPredictions.component";
import ResultHistory from "./routes/resultHistory/resultHistory.component";
import Statistics from "./routes/statistics/statistics.component";
import TodayMatches from "./routes/todayMatches/todayMathcesPage/todayMatches.component";
import Aboutus from "./routes/HeaderPages/aboutus/aboutus.component";
import Contact from "./routes/HeaderPages/contact/contact.component";
import SignIn from "./routes/HeaderPages/signin/signin.component";
import ComingSoon from "./routes/HeaderPages/comingnext/coming-soon.component";
import Privacy from "./routes/FooterPages/privacyPolicy/privacy.component";
import Footer from "./components/footer/footer";
import TermsOfUse from "./routes/FooterPages/TermosOfUse/termosOfUse";
import Mobile from "./routes/FooterPages/mobile/mobile";
import RecommendedSites from "./routes/FooterPages/recommendedSites/recommendedSites";
import FAQ from "./routes/FooterPages/FAQ/faq";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route path='/' element={<Footer/>}>
          <Route index element={<Home/>}/>
          <Route path='/aboutus' element={<Aboutus/>}/>
          <Route path='/coming-soon' element={<ComingSoon/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/privacy-policy' element={<Privacy/>}/>
          <Route path='/terms-of-use' element={<TermsOfUse/>}/>
          <Route path='/mobile' element={<Mobile/>}/>
          <Route path='/recommended-sites' element={<RecommendedSites/>}/>
          <Route path='/faq' element={<FAQ/>}/>
        </Route>
          <Route path='/yesterdayResults' element={<YesterdayResults/>}/>
          <Route path='/todayMatches' element={<TodayMatches/>}/>
          <Route path='/tomorrowPredictions' element={<TomorrowPredictions/>}/>
          <Route path='/resultHistory' element={<ResultHistory/>}/>
          <Route path='/statistics' element={<Statistics/>}/>
      </Route>
    </Routes>
  );
}

export default App;
