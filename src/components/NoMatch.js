import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';

const NoMatch = () => {
	return (
		<div className="fade-up" style={{ textAlign: 'center', padding: '80px 0' }}>
			<Typography variant="display4" component="h1">
				404
			</Typography>
			<Typography variant="subheading" color="textSecondary" style={{ margin: '16px 0 32px' }}>
				Lost in space. This page drifted out of orbit.
			</Typography>
			<Button component={Link} to="/" variant="raised" color="primary">
				Take me home
			</Button>
		</div>
	);
};
export default NoMatch;
