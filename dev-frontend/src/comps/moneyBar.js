var React = require('react')
import styled, { keyframes } from 'styled-components';
import CountUp from 'react-countup';

class MoneyBar extends React.Component{

    constructor(props) {
        super(props);
        const MoneySlideUp_KF = keyframes`
            0% {
                transform: translateY(0%)
            }
        `;
        this.state = {
            animation: MoneySlideUp_KF,
            animationInit: false,
            animationFinish: false,
            start: 0
        };
    }

    componentDidUpdate(){

        if (this.state.animationInit == false && this.props.animationStop == false){
            const MoneySlideUp_KF = keyframes`
                0% {
                    transform: translateY(${(((100/this.props.getHeight(this.props.teamData.amount, false).substring(0,2))-1)*100).toString()+'%'})
                }
            `;
            this.setState({
                animation: MoneySlideUp_KF,
                animationInit: true
            })
        } else if (this.state.animationFinish == false && this.props.animationStop == true){
            const MoneySlideUp_KF = keyframes`
                0% {
                    transform: translateY(0%)
                }
            `;
            this.setState({
                animation: MoneySlideUp_KF,
                animationFinish: true
            })
        }

        if(this.state.start == 0 && this.props.teamData.amount != 0 && this.props.animationStop == true){
            this.setState({
                start: this.props.teamData.amount
            })
        }
    }

    render(){
        const MoneySlideUp = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            animation: 2s ${this.state.animation}
        `;
        return(
            <div
                className='flex-column, flex_SpaceEvenly'
                style={{'flex':4}}>
                <div
                    style={{'flex':3,textAlign:'center'}}>
                    <h1>{this.props.getCity(this.props.teamData.team, this.props.sport)}</h1>
                    <h2>{this.props.getName(this.props.teamData.team, this.props.sport)}</h2>
                </div>
                <div
                    className='flex_stretch'
                    style={{'flex':7}}>
                    <MoneySlideUp
                        style={{'height':this.props.getHeight(this.props.teamData.amount, false), 'textAlign':'center', position:'relative'}}
                        className>
                        <CountUp
                            style={{'fontSize': '1.5rem', 'fontWeight': '600', 'fontFamily': 'Raleway, sans-serif'}}
                            className='margin_vertical25'
                            start = {this.state.start}
                            end={this.props.teamData.amount}
                            duration={2}
                            decimals={2}
                            prefix="$"
                            >
                        </CountUp>
                    </MoneySlideUp>
                    <div
                        style={{'height':this.props.getHeight(this.props.teamData.amount, true) , 'backgroundColor': this.props.getPrimaryColor(this.props.teamData.team, this.props.sport)}}
                        className = 'barGraphSlideUp'
                        >
                    </div>
                </div>
            </div>
        )
    }
}

export default MoneyBar;