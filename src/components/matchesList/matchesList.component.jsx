import TodayMatch from '../match/match.component';
import './matchesList.styles.scss'

const TodayMatchesList = (props) => {
  return (
    <div className='matches-list'>
      {props.matches.map((match) => (
        <TodayMatch
          key={match.id}
          playing_date={match.playing_date}
          country={match.country}
          league={match.league}
          home_team={match.home_team}
          away_team={match.away_team}
          prediction={match.prediction}
          odd={match.odd}
          playing_hour={match.playing_hour}
        />
      ))}
    </div>
  );
};

export default TodayMatchesList;
