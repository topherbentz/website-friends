var React = require('react')

class MatchupCard extends React.Component{
    
    routeToMatchup = () =>{
        this.props.openLink(window.location.href+'matchup/'+this.props.matchup.id)
    }

    render(){
        return(
            <button
                id='matchupCard'
                className = 'container flex_stretch flex_spaceCenter rcorner10 margin_vertical25 hoverButton color-background_primary'
                style = {{width:'100%'}}
                onClick= {this.routeToMatchup}>
                <div
                    className='flexHtoV_tablet'
                    style={{height:'100%', width:'100%'}}>
                    <div
                        id='teamLeft'
                        className = 'flex-row flex_spaceEvenly flex_center padding_horizontal2 padding_vertical25'
                        style = {{background:this.props.getPrimaryColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport), flex:8}}>
                        <div
                            id='teamLeftLogo'
                            className='teamLogo teamLogo_Radius teamLeftTabletLogo'
                            style={{background:this.props.getSecondaryColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}}>
                            {this.props.getLogo(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}
                        </div>
                        <div
                            id='teamLeftText'
                            className='rcorners10 flex_column padding20 margin_horizontal4to2_tablet'
                            style={{background:this.props.getSecondaryColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport), color:this.props.getFontColor(this.props.matchup.teams.homeTeam, this.props.matchup.sport), textAlign:'center', minWidth:'150px'}}>
                            <h2>{this.props.getCity(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}</h2>
                            <p>{this.props.getName(this.props.matchup.teams.homeTeam, this.props.matchup.sport)}</p>
                        </div>
                    </div>
                    <div
                        id='vsSymbol'
                        className='flex-column flex_center flex_spaceCenter margin10'
                        style={{flex:1}}>
                        <div
                            className='circle50 rcorners50'
                            style={{border:'3px solid black', color:'black'}}>
                            <p>vs</p>
                        </div>
                    </div>
                    <div
                        id='teamRight'
                        className = 'flex-row flex_spaceEvenly flex_center padding_horizontal2 padding_vertical25'
                        style = {{background:this.props.getPrimaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport), flex:8}}>
                        <div
                            id='teamRightTabletLogo'
                            className='teamRightTabletLogo teamLogo_Radius'
                            style={{background:this.props.getSecondaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}}>
                            {this.props.getLogo(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}
                        </div>
                        <div
                            id='teamRightText'
                            className='rcorners10 flex_column padding20 margin_horizontal4to2_tablet'
                            style={{background:this.props.getSecondaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport), color:this.props.getFontColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport), textAlign:'center', minWidth:'150px'}}>
                            <h2>{this.props.getCity(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}</h2>
                            <p>{this.props.getName(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}</p>
                        </div>
                        <div
                            id='teamRightLogo'
                            className='teamLogo teamLogo_Radius'
                            style={{background:this.props.getSecondaryColor(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}}>
                            {this.props.getLogo(this.props.matchup.teams.awayTeam, this.props.matchup.sport)}
                        </div>
                    </div>
                </div>
            </button>
        )
    }
}

export default MatchupCard;
