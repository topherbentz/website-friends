var React = require('react')

import MatchupCard from './matchupCard.js'


class MatchupList extends React.Component{
    render(){
        return(
            <div
                id='matchupArea'>
                {this.props.matchupIDList.map((value, index) => {
                    var LeftTeamID = this.props.matchupData[value].leftTeam;
                    var RightTeamID = this.props.matchupData[value].rightTeam;
                    var LeftTeam = this.props.teamData[LeftTeamID];
                    var RightTeam = this.props.teamData[RightTeamID];

                    return(
                        <div 
                            key={value}>
                            <MatchupCard
                                teamLeft = {LeftTeam.team}
                                teamLeftSport = {LeftTeam.sport}
                                teamRight = {RightTeam.team}
                                teamRightSport = {RightTeam.sport}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MatchupList;