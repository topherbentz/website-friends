var React = require('react')

import * as NHLLogos from './NHLlogos'
import * as NBALogos from './NBAlogos'


class MatchupCard extends React.Component{

    constructor(props) {
        super(props);
        this.NHLLogoList = {
            ANA: NHLLogos.ANA,
            ARI: NHLLogos.ARI,
            BOS: NHLLogos.BOS,
            BUF: NHLLogos.BUF,
            CAR: NHLLogos.CAR,
            CBJ: NHLLogos.CBJ,
            CGY: NHLLogos.CGY,
            CHI: NHLLogos.CHI,
            COL: NHLLogos.COL,
            DAL: NHLLogos.DAL,
            DET: NHLLogos.DET,
            EDM: NHLLogos.EDM,
            FLA: NHLLogos.FLA,
            LAK: NHLLogos.LAK,
            MIN: NHLLogos.MIN,
            MTL: NHLLogos.MTL,
            NJD: NHLLogos.NJD,
            NSH: NHLLogos.NSH,
            NYI: NHLLogos.NYI,
            NYR: NHLLogos.NYR,
            OTT: NHLLogos.OTT,
            PHI: NHLLogos.PHI,
            PIT: NHLLogos.PIT,
            SJS: NHLLogos.SJS,
            STL: NHLLogos.STL,
            TBL: NHLLogos.TBL,
            TOR: NHLLogos.TOR,
            VAN: NHLLogos.VAN,
            VGK: NHLLogos.VGK,
            WPG: NHLLogos.WPG,
            WSH: NHLLogos.WSH
        }
        this.NBALogoList = {
            ATL: NBALogos.ATL,
            BKN: NBALogos.BKN,
            BOS: NBALogos.BOS,
            CHA: NBALogos.CHA,
            CHI: NBALogos.CHI,
            CLE: NBALogos.CLE,
            DAL: NBALogos.DAL,
            DEN: NBALogos.DEN,
            DET: NBALogos.DET,
            GSW: NBALogos.GSW,
            HOU: NBALogos.HOU,
            IND: NBALogos.IND,
            LAC: NBALogos.LAC,
            LAL: NBALogos.LAL,
            MEM: NBALogos.MEM,
            MIA: NBALogos.MIA,
            MIL: NBALogos.MIL,
            MIN: NBALogos.MIN,
            NOP: NBALogos.NOP,
            NYK: NBALogos.NYK,
            OKC: NBALogos.OKC,
            ORL: NBALogos.ORL,
            PHI: NBALogos.PHI,
            PHX: NBALogos.PHX,
            POR: NBALogos.POR,
            SAC: NBALogos.SAC,
            SAS: NBALogos.SAS,
            TOR: NBALogos.TOR,
            UTA: NBALogos.UTA,
            WSH: NBALogos.WAS
        }
    }

    getLogo = (team,sport) => {
        if (sport == "Hockey"){
            let Logo = this.NHLLogoList[team]
            return(<Logo/>)
        }else if (sport == "Basketball"){
            let Logo = this.NBALogoList[team]
            return(<Logo/>)
        }
    }
    
    getPrimaryColor = (team,sport) => {
        console.log(team)
        if (sport == "Hockey"){
            return(this.NHLLogoList[team].Primary_Color)
        }else if (sport == "Basketball"){
            return(this.NBALogoList[team].Primary_Color)
        }
    }

    getSecondaryColor = (team,sport) => {
        if (sport == "Hockey"){
            return(this.NHLLogoList[team].Secondary_Color)
        }else if (sport == "Basketball"){
            return(this.NBALogoList[team].Secondary_Color)
        }
    }

    getFontColor = (team,sport) => {
        if (sport == "Hockey"){
            return(this.NHLLogoList[team].Font_Color)
        }else if (sport == "Basketball"){
            return(this.NBALogoList[team].Font_Color)
        }
    }

    getCity = (team,sport) => {
        if (sport == "Hockey"){
            return(this.NHLLogoList[team].City)
        }else if (sport == "Basketball"){
            return(this.NBALogoList[team].City)
        }
    }

    getName = (team,sport) => {
        if (sport == "Hockey"){
            return(this.NHLLogoList[team].Name)
        }else if (sport == "Basketball"){
            return(this.NBALogoList[team].Name)
        }
    }

    render(){
        return(
            <div 
                id='matchupCard' 
                className = 'flex-row container flex_stretch flex_spaceCenter rcorner10 margin_vertical25 hoverButton' 
                style = {{height:'300px'}}>
                <div
                    id='teamLeft'
                    className = 'flex-row flex_spaceEvenly flex_center padding_horizontal4 padding_vertical25'
                    style = {{background:this.getPrimaryColor(this.props.teamLeft, this.props.teamLeftSport), flex:4}}>
                    <div
                        id='teamLeftLogo'
                        className='teamLogo teamLogo_Radius'
                        style={{background:this.getSecondaryColor(this.props.teamLeft, this.props.teamLeftSport)}}>
                        {this.getLogo(this.props.teamLeft, this.props.teamLeftSport)}
                    </div>
                    <div
                        id='teamLeftText'
                        className='rcorners10 flex_column padding10 margin_horizontal8'
                        style={{background:this.getSecondaryColor(this.props.teamLeft, this.props.teamLeftSport), color:this.getFontColor(this.props.teamLeft, this.props.teamLeftSport), textAlign:'center', width:'200px'}}>
                        <h1>{this.getCity(this.props.teamLeft, this.props.teamLeftSport)}</h1>
                        <h2>{this.getName(this.props.teamLeft, this.props.teamLeftSport)}</h2>
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
                    style = {{background:this.getPrimaryColor(this.props.teamRight, this.props.teamRightSport), flex:4}}>
                    <div
                        id='teamRightText'
                        className='rcorners10 flex_column padding10 margin_horizontal8'
                        style={{background:this.getSecondaryColor(this.props.teamRight, this.props.teamRightSport), color:this.getFontColor(this.props.teamRight, this.props.teamRightSport), textAlign:'center', width:'200px'}}>
                        <h1>{this.getCity(this.props.teamRight, this.props.teamRightSport)}</h1>
                        <h2>{this.getName(this.props.teamRight, this.props.teamRightSport)}</h2>
                    </div>
                    <div
                        id='teamRightLogo'
                        className='teamLogo teamLogo_Radius'
                        style={{background:this.getSecondaryColor(this.props.teamRight, this.props.teamRightSport)}}>
                        {this.getLogo(this.props.teamRight, this.props.teamRightSport)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchupCard;