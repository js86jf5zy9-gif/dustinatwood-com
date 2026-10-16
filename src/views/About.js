import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import GlassCard from '../components/GlassCard';
import aboutStyle from '../styles/aboutStyle';
import profile from '../data/profile.json';
import wild_macbook from '../images/wild_macbook.png';

const About = ({ classes }) => {
	return (
		<div>
			<Header eyebrow="About me" subtitle="Coding is my creative outlet to the world.">
				Engineer, problem solver, builder.
			</Header>
			<div className={classes.layout}>
				<div className={`${classes.media} fade-up`}>
					<img src={wild_macbook} alt="MacBook Pro on a tree stump in the woods" className={classes.photo} />
					<dl className={classes.facts}>
						{profile.facts.map(({ label, value }) => (
							<div key={label} className={classes.fact}>
								<dt>{label}</dt>
								<dd>{value}</dd>
							</div>
						))}
					</dl>
				</div>
				<GlassCard className={`${classes.story} fade-up`} style={{ animationDelay: '0.15s' }}>
					{profile.about.map((paragraph, i) => (
						<Typography key={i} className={classes.paragraph}>
							{paragraph}
						</Typography>
					))}
					<Typography className={classes.offline}>{profile.offline}</Typography>
				</GlassCard>
			</div>
		</div>
	);
};
export default withStyles(aboutStyle)(About);
