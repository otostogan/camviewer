import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import {useRoutes} from '../../routes';
import {useAuth} from '../../hooks/auth.hook';

import {Nav, Header, Navbar} from 'rsuite';

import '../../assets/styles/index.scss';
import 'rsuite/dist/rsuite.min.css';

function App() {

	const {token, login, logout, userId} = useAuth();
	const isAuth = !!token;

	const routes = useRoutes(isAuth);
	return (
		<AuthContext.Provider value={{login, logout}}>
			<Router>
				<Header>
					<Navbar>
						<Navbar.Brand href="#">CAMVIEWER</Navbar.Brand>
						<Nav>
							<Nav.Item >Home</Nav.Item>
							<Nav.Item>News</Nav.Item>
							<Nav.Item>Products</Nav.Item>
							<Nav.Menu title="About">
								<Nav.Item>Company</Nav.Item>
								<Nav.Item>Team</Nav.Item>
								<Nav.Item>Contact</Nav.Item>
							</Nav.Menu>
						</Nav>
						<Nav pullRight>
							<Nav.Item onClick={logout}>LogOut</Nav.Item>
						</Nav>
					</Navbar>
				</Header>
				{routes}
			</Router>
		</AuthContext.Provider>
	);
}

export default App;
