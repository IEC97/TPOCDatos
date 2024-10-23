import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/SignIn'; // Tu componente de inicio de sesión
import VistaAdmin from './views/VistaAdmin';

function HomePrincipal() {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn" exact component={Login} />
        <Route path="/VistaAdmin" component={VistaAdmin} />
        <Route exact path="/">
          <Redirect to="/SignIn" />
        </Route>
      </Switch>
    </Router>
  );
}

export default HomePrincipal;