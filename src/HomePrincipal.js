import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Login from './views/SignIn'; // Tu componente de inicio de sesión
import VistaAdmin2 from './views/VistaAdmin2'; // Tu componente de dashboard

function HomePrincipal() {
  return (
    <Router>
      <Switch>
        <Route path="/SignIn" exact component={Login} />
        <Route path="/VistaAdmin2" component={VistaAdmin2} />
        <Route exact path="/">
          <Redirect to="/SignIn" />
        </Route>
      </Switch>
    </Router>
  );
}

export default HomePrincipal;