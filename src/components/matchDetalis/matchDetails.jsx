import { useContext } from 'react'
import './matchDetails.styles.scss'
import { StatisticsContext } from '../../contexts/statistics.context'
import createStatisticsAllLeagusByCountry from '../../config/helpers'
import DetailProgressBar from './detailProgressBar/detailsProgressBar'

const MatchDetails = ({country, league, prediction}) => {
    const {statistics} = useContext(StatisticsContext)

    const existsCountry = statistics.find((statisticEntry) => (statisticEntry.country === country))
    const exitstLeague = statistics.find((statisticEntry) => (statisticEntry.country === country) && (statisticEntry.league === league))
    const dataCountry = createStatisticsAllLeagusByCountry(statistics, country)
    const dataLeague = statistics.find((statisticEntry) => (statisticEntry.country === country) && statisticEntry.league === league)

    return(
        <div className='details-container'>
            <div className='detail-bar'>
                <p>{country}</p>
                <DetailProgressBar percent={dataCountry.total_win_percentage}/>
                <p className='wins-number'>{dataCountry.total_win} wins of {dataCountry.total_games}</p>
            </div>
            {exitstLeague ? 
            <div className='detail-bar'>
                <p>{league}</p>
                <DetailProgressBar percent={dataLeague.total_win_percentage}/>
                <p className='wins-number'>{dataLeague.total_win} wins of {dataLeague.total_games}</p>
            </div>
            :
            <></>
            }

            {
                prediction.length > 4 && exitstLeague ? //if it's an on Goals(true) or on Final Result(false) 
                    dataLeague.total_games_goals > 10 ? //if there are more than 10 matches on Goals display league stats else display country stats      
                        <div className='detail-bar'>
                            <p>{league} on Goals</p>
                            <DetailProgressBar percent={dataLeague.win_percentage_goals}/>
                            <p className='wins-number'>{dataLeague.win_goals} wins of {dataLeague.total_games_goals}</p>
                        </div>      
                        :
                        <div className='detail-bar'>
                            <p>{country} on Goals</p>
                            <DetailProgressBar percent={dataCountry.win_percentage_goals}/>
                            <p className='wins-number'>{dataCountry.win_goals} wins of {dataCountry.total_games_goals}</p>
                        </div>  
                :
                    exitstLeague ?
                        dataLeague.total_final_result > 10 ?
                            <div className='detail-bar'>
                                <p>{league} on Results</p>
                                <DetailProgressBar percent={dataLeague.win_percentage_final_result}/>
                                <p className='wins-number'>{dataLeague.win_final_result} wins of {dataLeague.total_games_final_result}</p>
                            </div>
                            :
                            <div className='detail-bar'>
                                <p>{country} on Results</p>
                                <DetailProgressBar percent={dataCountry.win_percentage_final_result}/>
                                <p className='wins-number'>{dataCountry.win_final_result} wins of {dataCountry.total_games_final_result}</p>                                
                            </div>
                    :
                        <div className='detail-bar'>
                            <p>{country} on Results</p>
                            <DetailProgressBar percent={dataCountry.win_percentage_final_result}/>
                            <p className='wins-number'>{dataCountry.win_final_result} wins of {dataCountry.total_games_final_result}</p>                                
                        </div>                        
            }
        </div>
    )
}

export default MatchDetails