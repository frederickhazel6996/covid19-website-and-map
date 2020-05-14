import React from 'react';
import Home from '../src/pages/Home';
import Wiki from '../src/pages/Wiki';
import error from '../src/pages/Error';
import Maps from '../src/pages/Map';

import { Route, Switch } from 'react-router-dom';
function App() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/wiki" component={Wiki} />
            <Route exact path="/maps" component={Maps} />

            <Route component={error} />
        </Switch>
    );
}

export default App;
