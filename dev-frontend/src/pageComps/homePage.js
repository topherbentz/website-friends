var React = require('react')
const QueryString = require('querystring')

import MatchupList from '../comps/matchupList.js'

class HomePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            matchups: [],
            cityFilter: "",
            sportFilter: ""
        }
    }

    componentDidMount() {
      this.getMatchups();
    }

    getMatchups = async() => {
      let queryInputs = {
        "city" : this.state.cityFilter,
        "sport" : this.state.sportFilter
      };

      let queryString = QueryString.encode(queryInputs);

      let url = `/get_matchups?${queryString}`;
      const response = await fetch(url, {
        method: 'GET',
      });
      const body = await response.text();

      this.setMatchups(JSON.parse(body));
    }

    setMatchups = matchups => {
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

      this.setState({
        matchups: newMatchups
      });
    }

    handleCityFilter = e => {
      this.setState(
        {
          cityFilter: e.target.value
        },
        this.getMatchups
      );
    }

    handleSportFilter = e => {
      this.setState(
        {
          sportFilter: e.target.value
        },
        this.getMatchups
      );
    }

    render(){
        return(
            <div
                id='appContents'
                className='color-background_primary color-text_primary margin_horizontal4'
                style={{overflowY:'hidden'}}>
                <div>
                  <label>City Filter</label>
                  <input
                      onChange = {this.handleCityFilter}
                  />
                  <label>Sport Filter</label>
                  <input
                      onChange = {this.handleSportFilter}
                  />
                </div>
                <MatchupList
                    matchups = {this.state.matchups}
                    getLogo = {this.props.getLogo}
                    getPrimaryColor = {this.props.getPrimaryColor}
                    getSecondaryColor = {this.props.getSecondaryColor}
                    getFontColor = {this.props.getFontColor}
                    getCity = {this.props.getCity}
                    getName = {this.props.getName}
                />
            </div>
        )
    }
}

export default HomePage;
