var React = require('react')
import styled, { keyframes } from 'styled-components';
import CountUp from 'react-countup';

class MoneyBar extends React.Component{
    render(){

        const MoneySlideUp_KF = keyframes`
            0% {
                transform: translateY(${(((100/this.props.getHeight(this.props.teamData.amount, false).substring(0,2))-1)*100).toString()+'%'})
            }
            `;

        const MoneySlideUp = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            animation: 2s ${MoneySlideUp_KF}
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
                        style={{'height':this.props.getHeight(this.props.teamData.amount, false), 'textAlign':'center', position:'relative','marginBottom':'10px'}}>
                        <CountUp
                            style={{'font-size': '1.5rem', 'font-weight': '600', 'font-family': 'Raleway, sans-serif'}}
                            start={0}
                            end={this.props.teamData.amount}
                            duration={2}
                            separator=" "
                            decimals={2}
                            decimal="."
                            prefix="$">
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