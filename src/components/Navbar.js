import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Avatar, Drawer, IconButton, Hidden } from '@material-ui/core';
import { Menu as MenuIcon, Close } from '@material-ui/icons';
import NavbarLink from './NavbarLink';
import navbarStyle from '../styles/navbarStyle';
import myself from '../images/myself.png';

class Navbar extends Component {
	state = {
		open: false
	};
	toggleDrawer = (open) => () => {
		this.setState({
			open: open
		});
	};

	renderLinks() {
		const { links } = this.props;
		return links.map((route, key) => {
			return !route.hidden ? <NavbarLink key={key} {...route} /> : null;
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<header className={classes.appBar}>
				<nav className={classes.container}>
					<Link to="/" className={classes.brand}>
						<Avatar alt="Dustin Atwood" src={myself} className={classes.avatar} />
						<span>Dustin Atwood</span>
					</Link>
					<Hidden only="xs">
						<div className={classes.links}>{this.renderLinks()}</div>
					</Hidden>
					<Hidden smUp>
						<IconButton color="inherit" aria-label="Open menu" onClick={this.toggleDrawer(true)}>
							<MenuIcon />
						</IconButton>
					</Hidden>
				</nav>
				<Drawer
					anchor="top"
					open={this.state.open}
					onClose={this.toggleDrawer(false)}
					classes={{ paper: classes.drawerPaper }}>
					<div
						className={classes.drawer}
						tabIndex={0}
						role="button"
						onClick={this.toggleDrawer(false)}
						onKeyDown={this.toggleDrawer(false)}>
						<IconButton color="inherit" aria-label="Close menu" className={classes.closeButton}>
							<Close />
						</IconButton>
						{this.renderLinks()}
					</div>
				</Drawer>
			</header>
		);
	}
}

export default withStyles(navbarStyle)(Navbar);
