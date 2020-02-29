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
                            class='flex-row flex_spaceEvenly flex_center buttonArea'>
                            <button
                                class="padding10 margin10 rcorners10 headerButton color-text_secondary">
                                About
                            </button>
                            <button
                                class="padding10 margin10 rcorners10 headerButton color-text_secondary ">
                                Contact
                            </button>
                            <button
                                class="padding10 margin10 rcorners10 headerButton color-text_secondary">
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