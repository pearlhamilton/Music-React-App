import React from 'react'
import { About, Home, Technology } from './pages'
import { Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/technology" component={Technology} />
        </Switch>
        )
}

export default App

