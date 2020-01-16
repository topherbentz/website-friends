var React = require('react')
var ReactDom = require('react-dom')

import './app.css'
import MatchupList from './comps/matchupList.js'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            teamData:{},
            matchupData: {},
            matchupIDList: []
        }
    }

    openLink = (link) =>{
        const a = document.createElement('a');
        a.setAttribute('hidden','');
        a.setAttribute('href', link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    openLinkNewTab = (link) =>{
        window.open(link, "_blank")
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

    render(){
        return(
            <div 
                id='appContents' 
                className='color-background_primary color-text_primary margin_horizontal4'
                style={{overflowY:'hidden'}}>
                <MatchupList 
                    teamData = {this.state.teamData} 
                    matchupData = {this.state.matchupData} 
                    matchupIDList = {this.state.matchupIDList}/>
            </div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"))