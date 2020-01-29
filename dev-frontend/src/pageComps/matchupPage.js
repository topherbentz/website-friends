var React = require('react')

import MoneyBar from '../comps/moneyBar.js'

class MatchupPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            id:'',
            sport:'',
            leftTeam:{
                team:'',
                amount:0,
                city:'',
                name:''
            },
            rightTeam:{
                team:'',
                amount:0,
                city:'',
                name:''
            },
            totalAmount:1
        }
    }

    getMatchupDetails = () =>{
        // This will need to be updated to get data from the server but for now this will be manually entered here

        //Load Matchup Data
        this.setState({
            sport:'Hockey',
            leftTeam:{
                team:'TOR',
                amount: 10
            },
            rightTeam:{
                team:'BOS',
                amount: 90
            },
            totalAmount: 45+55
        })
    }

    componentDidMount(){
        // id:this.props.id -> What it will be once it's set up
        this.setState({
            id:'1'
        })
        this.getMatchupDetails();
    }

    getHeight = (amount, graphH) =>{
        var pct;

        pct = amount*100/this.state.totalAmount

        if(pct < 50 && pct%10 == 5){
            pct = pct-5
        }
        if (pct < 20 && pct != 0){
            pct = 20
        }
        if (pct > 80 && pct != 100){
            pct = 80
        }

        pct = Math.round(pct/10)*10
        console.log(pct)

        if(graphH == false){
            pct = 100-pct
        }

        return(pct.toString()+'%')
    }


    render(){
        return(
            <div
                id='appContents'
                className='color-background_primary color-text_primary margin_horizontal4'
                style={{overflowY:'hidden'}}>
                <div
                    id='defaultMatchupDetails'
                    className='flex-row margin margin_vertical100 flex_stretch'
                    style={{'height':'600px'}}>
                    <MoneyBar
                        getCity = {this.props.getCity}
                        getName = {this.props.getName}
                        getPrimaryColor = {this.props.getPrimaryColor}
                        getHeight = {this.getHeight}
                        teamData = {this.state.leftTeam}
                        sport = {this.state.sport}
                    />
                    <div
                        id='buttonInMiddle'
                        style={{'flex':2}}>
                    </div>
                    <MoneyBar
                        getCity = {this.props.getCity}
                        getName = {this.props.getName}
                        getPrimaryColor = {this.props.getPrimaryColor}
                        getHeight = {this.getHeight}
                        teamData = {this.state.rightTeam}
                        sport = {this.state.sport}
                    />
                </div>
            </div>
        )
    }
}

export default MatchupPage;

