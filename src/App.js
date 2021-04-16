import React from 'react'
import { Artists, Home, Reviews } from './pages'
import { Switch, Route } from 'react-router-dom';


const App = () => {
    return(
        <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/artists" component={Artists} />
                <Route path="/reviews" component={Reviews} />
                <Route render={() => <h1 id="notFound">Sorry...Not Found!</h1>} />
        </Switch>
        )
}

export default App

