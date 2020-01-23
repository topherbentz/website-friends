var React = require('react')

import MatchupCard from './matchupCard.js'


class MatchupList extends React.Component{
    constructor(props) {
      super(props);
    }

    render() {

      if (this.props.matchups.length > 0) {
        return (
          <div id='matchupArea'>
            {this.props.matchups.map((matchup) => {
              return (
                <div key={matchup.id}>
                  <MatchupCard
                    teamLeft = {matchup.teams.homeTeam}
                    teamRight = {matchup.teams.awayTeam}
                    sport = {matchup.sport}
                  />
                </div>
              )
            })}
          </div>
        )

      // Need to create some kind of "Loading" component
      } else {
        return (
          <div>Loading...</div>
        )
      }
    }
}

export default MatchupList;
