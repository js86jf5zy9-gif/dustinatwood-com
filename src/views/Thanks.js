import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import contactStyle from '../styles/contactStyle';

// Hidden route (not shown in the nav); Contact sends visitors here after a
// successful Formspree submission.
const Thanks = ({ classes }) => {
	return (
		<div className={`${classes.wrapper} ${classes.center} fade-up`}>
			<CheckCircle className={classes.icon} />
			<Typography variant="display2" component="h1">
				Message sent
			</Typography>
			<Typography variant="subheading" component="p" className={classes.muted}>
				Thanks for getting in touch! I read every message and will get back to you shortly. Have a great day.
			</Typography>
			<Button component={Link} to="/" variant="raised" color="primary">
				Back to home
			</Button>
		</div>
	);
};
export default withStyles(contactStyle)(Thanks);
