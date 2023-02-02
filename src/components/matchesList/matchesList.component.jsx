import Match from '../match/match.component';
import './matchesList.styles.scss'

const MatchesList = (props) => {
  return (
    <div className='matches-list'>
      {props.matches.map((match) => (
        <Match
          key={match.id}
          playing_date={match.playing_date}
          country={match.country}
          league={match.league}
          home_team={match.home_team}
          away_team={match.away_team}
          prediction={match.prediction}
          odd={match.odd}
          playing_hour={match.playing_hour}
          result={match.result}
        />
      ))}
    </div>
  );
};

export default MatchesList;
