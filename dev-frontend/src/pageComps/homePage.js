var React = require('react')

import MatchupList from '../comps/matchupList.js'

class HomePage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            teamData: {},
            matchupData: {},
            matchupIDList: [],
            databaseValue: 'TEST'
        }
    }

    getMatchups = () =>{
        // This will need to be updated to get data from the server but for now this will be manually entered here

        // Colors come from here
        //https://teamcolorcodes.com/

        //Load Team Data

        this.setState({
            teamData:{
                '2d71933e671f':{
                    sport: 'Hockey',
                    team: 'ANA'
                },
                '7739b0e8bee2':{
                    sport: 'Hockey',
                    team: 'ARI'
                },
                '0dad9281576d':{
                    sport: 'Basketball',
                    team: 'MIL'
                },
                'a6637da667f5':{
                    sport: 'Basketball',
                    team: 'OKC'
                }
            }
        })

        //Load Matchup Data
        this.setState({
            matchupData:{
                '773ab0f04b43':{
                    leftTeam:'2d71933e671f',
                    rightTeam:'7739b0e8bee2',
                    sport: 'Hockey',
                },
                '22d15c48f1b4':{
                    leftTeam:'0dad9281576d',
                    rightTeam:'a6637da667f5',
                    sport: 'Basketball'
                }
            }
        })

        this.setState({
            matchupIDList: ['773ab0f04b43', '22d15c48f1b4']
        })
    }

    componentDidMount(){
        this.getMatchups();
    }

    handleGetDataClick = async() => {
        const response = await fetch('/some_route', {
          method: 'GET'
        });
        const body = await response.text();

        let jsonBody = JSON.parse(body);
        this.setState({
          databaseValue: jsonBody[0].home_team.team_id.toString()
        });
    }

    render(){
        return(
            <div
                id='appContents'
                className='color-background_primary color-text_primary margin_horizontal4'
                style={{overflowY:'hidden'}}>
                <button onClick = {this.handleGetDataClick}>Get Data</button>
                <h1>{this.state.databaseValue}</h1>
                <MatchupList
                    teamData = {this.state.teamData}
                    matchupData = {this.state.matchupData}
                    matchupIDList = {this.state.matchupIDList}/>
            </div>
        )
    }
}

export default HomePage;