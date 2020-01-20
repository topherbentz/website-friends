var React = require('react')
var ReactDom = require('react-dom')

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './app.css'

import HomePage from './pageComps/homePage.js'

class App extends React.Component{

    openLink = (link) =>{
        const a = document.createElement('a');
        a.setAttribute('hidden','');
        a.setAttribute('href', link);
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    openLinkNewTab = (link) =>{
        window.open(link, "_blank")
    }

    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/matchup'>
                        <h1>Matchup Detail Comp</h1>
                    </Route>
                    <Route exact path='/'>
                        <HomePage/>
                    </Route>
                    <Route path='/'>
                        <h1>404 Here</h1>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

ReactDom.render(<App/>,document.getElementById("app"))
