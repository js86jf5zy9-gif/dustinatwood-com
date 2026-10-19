import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import footerStyle from '../styles/footerStyle';
import social from '../routes/social';

const Footer = ({ classes, links }) => {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={classes.footer}>
			<div className={classes.container}>
				<span className={classes.copyright}>© {currentYear} Dustin Atwood</span>
				<nav className={classes.links}>
					{links.filter((route) => !route.hidden).map((route) => (
						<Link key={route.path} to={route.path} className={classes.link}>
							{route.name}
						</Link>
					))}
				</nav>
				<nav className={classes.links}>
					{social.map((route) => (
						<a
							key={route.path}
							href={route.path}
							target="_blank"
							rel="noopener noreferrer"
							className={classes.link}>
							{route.name}
						</a>
					))}
				</nav>
			</div>
		</footer>
	);
};
export default withStyles(footerStyle)(Footer);
