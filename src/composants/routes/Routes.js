import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../../pages/index'
import PageAbonnement from '../../pages/PageAbonnement'
import PageContact from '../../pages/PageContact'
import PageConnexion from '../../pages/PageConnexion'
import { Modele1, Modele2, Modele3, Modele4 } from '../Hebergement';
import PageRestauration from '../../pages/PageRestauration';
import Rooms from '../../pages/Rooms';
import SingleRoom from '../../pages/SingleRoom';
import Error from '../../pages/Error';
import Booknow from '../../pages/Booknow';
import PageHebergement from '../../pages/PageHebergement';
import PageReservation from '../../pages/PageReservation';



const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/PageAbonnement" component={PageAbonnement} exact />
        <Route path="/PageContact" component={PageContact} exact />
        <Route exact path="/modele-1" component={Modele1} />
        <Route exact path="/modele-2" component={Modele2} />
        <Route exact path="/modele-3" component={Modele3} />
        <Route exact path="/modele-4" component={Modele4} />
        <Route exact path="/PageHebergement" component={PageHebergement} />
        <Route exact path="/PageReservation" component={PageReservation} />
        <Route exact path="/EspacePersonnel" component={PageConnexion} />
        <Route exact path="/PageRestauration" component={PageRestauration} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route exact path="/booknow/:slug" component={Booknow} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;