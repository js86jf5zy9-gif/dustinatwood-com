import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import headerStyle from '../styles/headerStyle';

const Header = ({ classes, children, eyebrow, subtitle }) => {
	return (
		<div className={`${classes.header} fade-up`}>
			{eyebrow && <span className={classes.eyebrow}>{eyebrow}</span>}
			<Typography variant="display2" component="h1" className={classes.heading}>
				{children}
			</Typography>
			{subtitle && (
				<Typography variant="subheading" component="p" className={classes.subtitle}>
					{subtitle}
				</Typography>
			)}
		</div>
	);
};
export default withStyles(headerStyle)(Header);
