import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import glassCardStyle from '../styles/glassCardStyle';

const GlassCard = ({ classes, className = '', component: Tag = 'div', children, ...rest }) => {
	return (
		<Tag className={`${classes.card} ${className}`} {...rest}>
			{children}
		</Tag>
	);
};

export default withStyles(glassCardStyle)(GlassCard);
