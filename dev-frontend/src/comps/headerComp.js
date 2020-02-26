var React = require('react')

import Logo from '../../media/logo.png'

class HeaderComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            headerStyle:false
        }
    }

    componentDidMount(){
        this.setState({
            headerStyle:this.props.headerLogo
        })
    }

    render(){
        //headerstyle 1 has the logo
        //headerstyle 2 does not have the logo
        //headerstyle 3 is the searching header
        return(
            <div 
                id='headerComp'>
                <div
                    className='color-background_secondary flex-row headerCompStyle'>
                    <div 
                        id='imageArea'
                        style={{flex:2}}>
                        {this.state.headerStyle == true &&
                            <div>
                                <img
                                    id='headerLogo'
                                    className='headerLogo margin10'
                                    src={Logo}>
                                </img>
                            </div>
                        }
                    </div>
                    <div
                        id='buttonArea'
                        className='flex-row flex_spaceEvenly flex_center buttonArea'>
                        <button
                            className="padding10 margin10 rcorners10 headerButton color-text_secondary">
                            About
                        </button>
                        <button
                            className="padding10 margin10 rcorners10 headerButton color-text_secondary ">
                            Contact
                        </button>
                        <button
                            className="padding10 margin10 rcorners10 headerButton color-text_secondary">
                            PayPal
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HeaderComp;