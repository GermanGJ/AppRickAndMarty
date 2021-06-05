import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Home';
import Layout from './Layout';
//import BadgeNew from '../pages/BadgeNew';
//import Badges from '../pages/Badges';
import NotFound from './NotFound';


function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/NotFound" component={NotFound} />
                </Switch>
            </Layout>
        </BrowserRouter>        
    ); 
}

export default App;