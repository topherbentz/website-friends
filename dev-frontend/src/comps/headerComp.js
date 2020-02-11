var React = require('react')
class HeaderComp extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            headerStyle:1
        }
    }

    componentDidMount(){
        this.setState({
            headerStyle:this.props.headerStyle
        })
    }

    render(){
        //headerstyle 1 has the logo
        //headerstyle 2 does not have the logo
        //headerstyle 3 is the searching header
        return(
            <div 
                id='headerComp'>
                {this.state.headerStyle != 3 &&
                    <div
                        className='color-background_secondary flex-row headerCompStyle'>
                        <div 
                            id='imageArea'
                            style={{flex:2}}>
                            {this.state.headerStyle == 1 &&
                                //image stuff here
                                <div></div>
                            }
                        </div>
                        <div 
                            id='buttonArea'
                            className='flex-row flex_spaceEvenly flex_center'
                            style={{flex:1}}>
                            <button
                                className='padding10 margin10 color-background_primary rcorners10 headerButton'>
                                About
                            </button>
                            <button
                                className='padding10 margin10 color-background_primary rcorners10 headerButton'>
                                Contact
                            </button>
                            <button
                                className='padding10 margin10 color-background_primary rcorners10 headerButton'>
                                PayPal
                            </button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default HeaderComp;