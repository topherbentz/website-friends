var React = require('react')

class LoadingComp extends React.Component{
    render(){
        return(
            <div className="loadingContainer">
                <div className="loading">
                    <div className="color-background_secondary"></div>
                </div>
            </div>
        )
    }
}

export default LoadingComp;