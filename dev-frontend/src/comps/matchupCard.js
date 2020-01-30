var React = require('react')

class MatchupCard extends React.Component{
<<<<<<< HEAD

    // Colors come from here
    //https://teamcolorcodes.com/

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

=======
>>>>>>> master
    render(){
        return(
            <div
                id='matchupCard'
                className = 'flex-row container flex_stretch flex_spaceCenter rcorner10 margin_vertical25 hoverButton'
                style = {{height:'300px'}}>
                <div
                    id='teamLeft'
                    className = 'flex-row flex_spaceEvenly flex_center padding_horizontal4 padding_vertical25'
                    style = {{background:this.props.getPrimaryColor(this.props.teamLeft, this.props.sport), flex:4}}>
                    <div
                        id='teamLeftLogo'
                        className='teamLogo teamLogo_Radius'
                        style={{background:this.props.getSecondaryColor(this.props.teamLeft, this.props.sport)}}>
                        {this.props.getLogo(this.props.teamLeft, this.props.sport)}
                    </div>
                    <div
                        id='teamLeftText'
                        className='rcorners10 flex_column padding10 margin_horizontal8'
                        style={{background:this.props.getSecondaryColor(this.props.teamLeft, this.props.sport), color:this.props.getFontColor(this.props.teamLeft, this.props.sport), textAlign:'center', width:'200px'}}>
                        <h1>{this.props.getCity(this.props.teamLeft, this.props.sport)}</h1>
                        <h2>{this.props.getName(this.props.teamLeft, this.props.sport)}</h2>
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
                    style = {{background:this.props.getPrimaryColor(this.props.teamRight, this.props.sport), flex:4}}>
                    <div
                        id='teamRightText'
                        className='rcorners10 flex_column padding10 margin_horizontal8'
                        style={{background:this.props.getSecondaryColor(this.props.teamRight, this.props.sport), color:this.props.getFontColor(this.props.teamRight, this.props.sport), textAlign:'center', width:'200px'}}>
                        <h1>{this.props.getCity(this.props.teamRight, this.props.sport)}</h1>
                        <h2>{this.props.getName(this.props.teamRight, this.props.sport)}</h2>
                    </div>
                    <div
                        id='teamRightLogo'
                        className='teamLogo teamLogo_Radius'
                        style={{background:this.props.getSecondaryColor(this.props.teamRight, this.props.sport)}}>
                        {this.props.getLogo(this.props.teamRight, this.props.sport)}
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchupCard;
