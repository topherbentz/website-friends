var React = require('react')

class MatchupCard extends React.Component{
    render(){
        return(
            <div
                id='matchupCard'
                className = 'flex-row container flex_stretch flex_spaceCenter rcorner10 margin_vertical25 hoverButton'
                style = {{height:'300px'}}>
                <div
                    id='teamLeft'
                    className = 'flex-row flex_spaceEvenly flex_center padding_horizontal4 padding_vertical25'
                    style = {{background:this.props.getPrimaryColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport), flex:4}}>
                    <div
                        id='teamLeftLogo'
                        className='teamLogo teamLogo_Radius'
                        style={{background:this.props.getSecondaryColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}}>
                        {this.props.getLogo(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}
                    </div>
                    <div
                        id='teamLeftText'
                        className='rcorners10 flex_column padding10 margin_horizontal8'
                        style={{background:this.props.getSecondaryColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport), color:this.props.getFontColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport), textAlign:'center', width:'200px'}}>
                        <h1>{this.props.getCity(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}</h1>
                        <h2>{this.props.getName(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}</h2>
                    </div>
                </div>
                <div
                    id='vsSymbol'
                    className='flex-column flex_center flex_spaceCenter'
                    style={{flex:1}}>
                    <div
                        className='circle50 rcorners50'
                        style={{border:'3px solid black', color:'black'}}>
                        <h2>vs</h2>
                    </div>
                </div>
                <div
                    id='teamRight'
                    className = 'flex-row flex_spaceEvenly flex_center padding_horizontal4 padding_vertical25'
                    style = {{background:this.props.getPrimaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport), flex:4}}>
                    <div
                        id='teamRightText'
                        className='rcorners10 flex_column padding10 margin_horizontal8'
                        style={{background:this.props.getSecondaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport), color:this.props.getFontColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport), textAlign:'center', width:'200px'}}>
                        <h1>{this.props.getCity(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}</h1>
                        <h2>{this.props.getName(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}</h2>
                    </div>
                    <div
                        id='teamRightLogo'
                        className='teamLogo teamLogo_Radius'
                        style={{background:this.props.getSecondaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}}>
                        {this.props.getLogo(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchupCard;
