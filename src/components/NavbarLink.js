import React from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import navbarStyle from '../styles/navbarStyle';

const NavbarLink = ({ classes, path, name }) => {
	return (
		<NavLink exact to={path} className={classes.link} activeClassName={classes.active}>
			{name}
		</NavLink>
	);
};

export default withStyles(navbarStyle)(NavbarLink);
