import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import routes from '../routes';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NoMatch from '../components/NoMatch';
import Starfield from '../components/Starfield';
import UpdateNotice from '../components/UpdateNotice';
import ScrollToTop from '../components/ScrollToTop';
import appTheme from '../styles/appTheme';

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<MuiThemeProvider theme={appTheme}>
					<Starfield />
					<ScrollToTop />
					<div className="app-shell">
						<Navbar links={routes} />
						<main className="page">
							<Switch>
								{routes.map((prop, key) => {
									return <Route exact path={prop.path} key={key} component={prop.component} />;
								})}
								<Route component={NoMatch} />
							</Switch>
						</main>
						<Footer links={routes} />
					</div>
					<UpdateNotice />
				</MuiThemeProvider>
			</BrowserRouter>
		);
	}
}

export default App;
