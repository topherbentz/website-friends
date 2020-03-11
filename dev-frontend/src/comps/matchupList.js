var React = require('react')

import MatchupCard from './matchupCard.js'
import LoadingComp from './loadingComp.js'


class MatchupList extends React.Component{
    constructor(props) {
      super(props);
    }

    render() {

      if (this.props.matchups.length > 0) {
        return (
          <div
            id='matchupArea'>
            {this.props.matchups.map((matchup) => {
              return (
                <div
                  key={matchup.id}>
                  <MatchupCard
                    matchup = {matchup}
                    getLogo = {this.props.getLogo}
                    getPrimaryColor = {this.props.getPrimaryColor}
                    getSecondaryColor = {this.props.getSecondaryColor}
                    getFontColor = {this.props.getFontColor}
                    getCity = {this.props.getCity}
                    getName = {this.props.getName}
                  />
                </div>
              )
            })}
          </div>
        )
      } else {
        return (
          <LoadingComp/>
        )
      }
    }
}

export default MatchupList;
