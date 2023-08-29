import React from "react";
import './recommendedSites.styles.scss'

const RecommendedSites = () => {
    return(
        <>
            <h1 className="recommended-title">Recommended Sites</h1>
            <div className="sites-container">
                <div>
                    <p className="recommended-subtitle">Sports websites:</p>
                    <a href="https://www.flashscore.com" target="_blank" rel="noreferrer">
                        <p>Flashscore - for Livescores, Standings</p>
                    </a>
                    <a href="https://www.footballdatabase.eu" target="_blank" rel="noreferrer">
                        <p>FotballDatabase - for latest news</p>
                    </a>
                    <a href="https://www.livesoccertv.com" target="_blank" rel="noreferrer">
                        <p>LiveSoccer - for Livescores and Streaming</p>
                    </a>
                    <a href="https://www.footballextras.net" target="_blank" rel="noreferrer">
                        <p>FootballExtras - for news</p>
                    </a>
                    <a href="https://qatar-soccer.net" target="_blank" rel="noreferrer">
                        <p>QatarSoccer - for news</p>
                    </a>
                    <a href="https://www.arsenalstation.com" target="_blank" rel="noreferrer">
                        <p>ArsenalStation - for news</p>
                    </a>

                    <p className="recommended-subtitle">Statistics websites:</p>
                    <a href="https://www.statscrew.com" target="_blank" rel="noreferrer">
                        <p>StatisticsCrew - for sport statistics</p>
                    </a>
                    <a href="https://www.bari91.com" target="_blank" rel="noreferrer">
                        <p>SoccerStats - for odds and statistics</p>
                    </a>
                    <a href="http://www.statarea.com" target="_blank" rel="noreferrer">
                        <p>StatArea - for odds and statistics</p>
                    </a>
                </div>
                
                <div>
                    <p className="recommended-subtitle">Betting websites:</p>
                    <a href="https://www.topfootballtipster.com" target="_blank" rel="noreferrer">
                        <p>TopFootballTipster - for football analyses</p>
                    </a>
                    <a href="https://bettingfamily.com" target="_blank" rel="noreferrer">
                        <p>BettingFamily - for fotball tips</p>
                    </a>
                    <a href="https://www.oddsportal.com" target="_blank" rel="noreferrer">
                        <p>OddsPortal - for odds and statistics</p>
                    </a>

                    <p className="recommended-subtitle">Live scores websites:</p>
                    <a href="https://www.livescore.in/r" target="_blank" rel="noreferrer">
                        <p>LiveScore - for Livescores, Standings</p>
                    </a>
                    <a href="https://www.soccer24.com" target="_blank" rel="noreferrer">
                        <p>BSoccerResults - for Livescores</p>
                    </a>
                    <a href="https://enetpulse.com" target="_blank" rel="noreferrer">
                        <p>EnetPulse - for sport data</p>
                    </a>
                </div>
            </div>
        </>
    )
}

export default RecommendedSites