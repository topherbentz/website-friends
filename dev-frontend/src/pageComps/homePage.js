var React = require('react')
const QueryString = require('querystring')

import MatchupList from '../comps/matchupList.js'
import HeaderComp from '../comps/headerComp.js'
import Logo from '../../media/logo_transparent.png'

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
                className='color-background_primary color-text_primary'
                style={{overflowY:'hidden'}}>
                <div
                  id='headerLayoutDiv'
                  class='marginHeader'>
                  <HeaderComp
                    headerStyle={2}
                  />
                </div>
                <div
                  id='bodyLayoutDiv'
                  class='margin_horizontal4'>
                  <div
                    id='logoDiv'
                    class='flex-column flex_center homeLogoDiv'>
                    <img
                      src={Logo}
                      class='homeLogo'>
                    </img>
                  </div>
                  <div
                    id='searchDiv'
                    className='flex-column flex_center'
                    style={{'marginBottom':'100px'}}>
                    <div 
                      className='searchDiv flex-column'>
                      <input 
                        id='searchBar'
                        type="text"
                        placeholder="Search for a team.."
                        maxLength="40"
                        className='searchBar'/>
                      <div
                        id='filterBar'
                        className='flex-row filterBar'>
                        <div
                        className='filterDiv'
                          style={{'flex':1}}>
                          <span>Filter</span>
                        </div>
                        <select
                          id='cityFilter'
                          className='filterDiv'
                          style={{'flex':2}}
                          onChange = {this.handleCityFilter}>
                          <option 
                            value="">
                            City
                          </option>
                          <option
                            value="TOR">
                            Toronto
                          </option>
                          <option
                            value="BOS">
                            Boston
                          </option>
                        </select>
                        <select
                          id='sportFilter'
                          className='filterDiv'
                          style={{'flex':2}}
                          onChange = {this.handleSportFilter}>
                          <option 
                            value="">
                            Sport
                          </option>
                          <option
                            value="Hockey">
                            Hockey
                          </option>
                          <option
                            value="Basketball">
                            Basketball
                          </option>            
                        </select>
                      </div>
                    </div>
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
              </div>
        )
    }
}

export default HomePage;
