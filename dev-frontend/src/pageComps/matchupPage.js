var React = require('react')

import MoneyBar from '../comps/moneyBar.js'
import Modal from '../comps/modal.js'
import LoadingComp from '../comps/loadingComp.js';

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
            totalAmount:1,
            modal:'',
            display:'none',
            show:false,
            animationStop:false
        }
    }

    getMatchupDetails = (id) =>{
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
            id:window.location.href.split('/').pop()
        })
        this.getMatchupDetails(this.state.id);
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

        if(graphH == false){
            pct = 100-pct
        }

        return(pct.toString()+'%')
    }

    handleClose = () =>{
        this.setState({
            modal:'',
            display:'none',
            show:false
        })
    }

    handleOpen = (event) =>{
        const id = event.target.id;
        this.setState({
            modal:id,
            display:'block',
            show:true,
            animationStop:true
        })
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
                        animationStop = {this.state.animationStop}
                    />
                    <div
                        id='buttonsInMiddle'
                        className='flex-column flex_spaceCenter'
                        style={{'flex':3}}>
                        <button
                            id='donateNow'
                            className='hoverButton margin25 color-background_primary'
                            onClick={this.handleOpen}>
                            Donate Now
                        </button>
                        <button
                            id='donateNow'
                            className='hoverButton margin25 color-background_primary'
                            onClick={this.handleOpen}>
                            Pledge to Donate
                        </button>
                        <button
                            id='donateNow'
                            className='hoverButton margin25 color-background_primary'
                            onClick={this.handleOpen}>
                            Share Matchup
                        </button>
                    </div>
                    <MoneyBar
                        getCity = {this.props.getCity}
                        getName = {this.props.getName}
                        getPrimaryColor = {this.props.getPrimaryColor}
                        getHeight = {this.getHeight}
                        teamData = {this.state.rightTeam}
                        sport = {this.state.sport}
                        animationStop = {this.state.animationStop}
                    />
                    <Modal
                        show = {this.state.show}
                        modalDisplay = {this.state.display}
                        handleClose = {this.handleClose}
                    />
                </div>
            </div>
        )
    }
}

export default MatchupPage;

