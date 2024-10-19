import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Home from "../App";
import Login from "../SignIn";
//import LoginStaff from '../SignInStaff';
import SignUp from "../SignUp";
//import VistaAdmin from './VistaAdmin';
//import VistaJugador from './VistaJugador';

class App extends Component {


	render() {
		return(
			<Router>
				<Route path="/login/" component={Login} />
				<Route path="/home/" component={Home} />
				<Route path="/signup/" component={SignUp}/>
				{/* <Route path="/loginStaff/" component={LoginStaff}/>
				<Route path="/VistaAdmin/" component={VistaAdmin} />	
				<Route path="/VistaJugador/" component={VistaJugador} />						 */}
				<Route exact path="/" render={() => <Redirect to="/home/"/>} />

			</Router>
		)
	}
}

export default App;