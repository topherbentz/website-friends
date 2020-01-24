var React = require('react')

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
            totalAmount:0
        }
    }

    getMatchupDetails = () =>{
        // This will need to be updated to get data from the server but for now this will be manually entered here

        //Load Matchup Data
        this.setState({
            sport:'Hockey',
            leftTeam:{
                team:'TOR',
                amount: 100
            },
            rightTeam:{
                team:'BOS',
                amount: 50
            },
            totalAmount: 100+50
        })
    }

    componentDidMount(){
        // id:this.props.id -> What it will be once it's set up
        this.setState({
            id:'1'
        })
        this.getMatchupDetails();
    }

    getHeight = (team) =>{
        var num;
        if(team == 'left'){
            num = Math.floor((this.state.leftTeam.amount/this.state.totalAmount)*100)
        }else if(team == 'right'){
            num = Math.floor((this.state.rightTeam.amount/this.state.totalAmount)*100)
        }
        console.log(team)
        console.log(num)
        return(num.toString()+'%')
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
                    <div
                        id='leftTeamMatchupDetails'
                        className='flex-column, flex_SpaceEvenly'
                        style={{'flex':4}}>
                        <div
                            style={{'flex':3,textAlign:'center'}}>
                            <h1>{this.props.getCity(this.state.leftTeam.team, this.state.sport)}</h1>
                            <h2>{this.props.getName(this.state.leftTeam.team, this.state.sport)}</h2>
                        </div>
                        <div
                            className='flex_stretch'
                            style={{'flex':7}}>
                            <div
                                style={{'height':this.getHeight('right')}}>
                            </div>
                            <div
                                style={{'height':this.getHeight('left') , 'backgroundColor': this.props.getPrimaryColor(this.state.leftTeam.team, this.state.sport)}}>
                            </div>
                        </div>
                    </div>
                    <div
                        id='buttonInMiddle'
                        style={{'flex':2}}>
                    </div>
                    <div
                        id='rightTeamMatchupDetails'
                        className='flex-column, flex_SpaceEvenly'
                        style={{'flex':4}}>
                        <div
                            style={{'flex':3,textAlign:'center'}}>
                            <h1>{this.props.getCity(this.state.rightTeam.team, this.state.sport)}</h1>
                            <h2>{this.props.getName(this.state.rightTeam.team, this.state.sport)}</h2>
                        </div>
                        <div
                            className='flex_stretch'
                            style={{'flex':7}}>
                            <div
                                style={{'height':this.getHeight('left')}}>
                            </div>
                            <div
                                style={{'height':this.getHeight('right') , 'backgroundColor': this.props.getPrimaryColor(this.state.rightTeam.team, this.state.sport)}}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MatchupPage;

