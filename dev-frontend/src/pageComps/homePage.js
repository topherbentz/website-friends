var React = require('react')

import MatchupList from '../comps/matchupList.js'

class HomePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            matchups: []
        }

        this.setMatchups = this.setMatchups.bind(this);
        this.getMatchups = this.getMatchups.bind(this);
    }

    componentDidMount() {
      this.getMatchups();
    }

    getMatchups = async() => {
        const response = await fetch('/matchups', {
          method: 'GET'
        });
        const body = await response.text();
        this.setMatchups(JSON.parse(body));
    }

    setMatchups(matchups) {
      let newMatchups = [];

      for (let i = 0; i < matchups.length; i++) {
        newMatchups.push({
          id: matchups[i]._id,
          teams: {
            homeTeam: matchups[i].home_team.team_id,
            awayTeam: matchups[i].away_team.team_id
          },
          sport: matchups[i].sport_id
        });

        this.setState({
          matchups: newMatchups
        });
      }
    }

    render(){
        return(
            <div
                id='appContents'
                className='color-background_primary color-text_primary margin_horizontal4'
                style={{overflowY:'hidden'}}>
                <button onClick = {this.getMatchups}>Get Matchup</button>
                <MatchupList matchups = {this.state.matchups} />
            </div>
        )
    }
}

export default HomePage;
