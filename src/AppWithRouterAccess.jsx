import React from 'react';
import { Route } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth } from '@okta/okta-auth-js';

import Home from './Pages/Home'
import Blastoff from './Pages/Blastoff'

const AppWithRouterAccess = () => {
    const issuer = process.env.REACT_APP_OKTA_URL_BASE + '/oauth2/default'
    const clientId = process.env.REACT_APP_OKTA_CLIENTID;
    const redirect = process.env.REACT_APP_OKTA_APP_BASE_URL + '/callback';

    const oktaAuth = new OktaAuth({
        issuer: issuer,
        clientId: clientId,
        redirectUri: redirect
      });      

    return (
        <Security oktaAuth={oktaAuth}>
            <Route path='/' exact={true} component={Home} ></Route>
            <SecureRoute path='/Blastoff' component={Blastoff} />
            <Route path='/callback' component={LoginCallback} />
        </Security>
    );
};
export default AppWithRouterAccess;
