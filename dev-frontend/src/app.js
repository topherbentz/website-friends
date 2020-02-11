var React = require('react')
var ReactDom = require('react-dom')

import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import './app.css'

import * as NHLLogos from './comps/NHLlogos'
import * as NBALogos from './comps/NBAlogos'

import HomePage from './pageComps/homePage.js'
import MatchupPage from './pageComps/matchupPage.js'

class App extends React.Component{

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

    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/matchup'>
                        <MatchupPage
                            className="color-background_primary"
                            getPrimaryColor = {this.getPrimaryColor}
                            getCity = {this.getCity}
                            getName = {this.getName}
                        />
                    </Route>
                    <Route exact path='/'>
                        <HomePage
                            className="color-background_primary"
                            getLogo = {this.getLogo}
                            getPrimaryColor = {this.getPrimaryColor}
                            getSecondaryColor = {this.getSecondaryColor}
                            getFontColor = {this.getFontColor}
                            getCity = {this.getCity}
                            getName = {this.getName}
                        />
                    </Route>
                    <Route path='/'>
                        <h1>404 Here</h1>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"))
