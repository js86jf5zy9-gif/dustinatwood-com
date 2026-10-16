import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';
import GlassCard from './GlassCard';
import basicCardStyle from '../styles/basicCardStyle';

const BasicCard = ({ link, label, desc, tech, image, style, classes }) => {
	return (
		<GlassCard component="article" className={`${classes.root} fade-up`} style={style}>
			<a href={link} target="_blank" rel="noopener noreferrer" className={classes.media}>
				<img src={image} alt={`${label} screenshot`} className={classes.image} />
			</a>
			<div className={classes.body}>
				<Typography variant="headline" component="h2" className={classes.title}>
					{label}
				</Typography>
				<Typography className={classes.desc}>{desc}</Typography>
				<ul className={classes.chips}>
					{tech.split(',').map((t) => (
						<li key={t} className={classes.chip}>
							{t}
						</li>
					))}
				</ul>
				<Button
					variant="raised"
					color="primary"
					href={link}
					target="_blank"
					rel="noopener noreferrer"
					className={classes.button}>
					Try it
					<OpenInNew className={classes.icon} />
				</Button>
			</div>
		</GlassCard>
	);
};
export default withStyles(basicCardStyle)(BasicCard);
