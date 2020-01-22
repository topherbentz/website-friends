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
                                getLogo = {this.props.getLogo}
                                getPrimaryColor = {this.props.getPrimaryColor}
                                getSecondaryColor = {this.props.getSecondaryColor}
                                getFontColor = {this.props.getFontColor}
                                getCity = {this.props.getCity}
                                getName = {this.props.getName}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default MatchupList;