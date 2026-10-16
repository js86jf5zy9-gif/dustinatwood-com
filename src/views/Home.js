import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GlassCard from '../components/GlassCard';
import homeStyle from '../styles/homeStyle';
import skills from '../data/skills.json';
import profile from '../data/profile.json';

const Home = ({ classes }) => {
	return (
		<div>
			<section className={`${classes.hero} fade-up`}>
				<span className={classes.eyebrow}>{profile.role}</span>
				<Typography variant="display4" component="h1" className={classes.heading}>
					Hello, I'm <span className={classes.gradient}>Dustin</span>.
				</Typography>
				<Typography variant="subheading" className={classes.lead}>
					{profile.intro} With {profile.experience} {profile.focus}, I focus on clean code, practical
					problem solving, and shipping work people actually use.
				</Typography>
				<div className={classes.actions}>
					<Button component={Link} to="/projects" variant="raised" color="primary" size="large">
						View projects
					</Button>
					<Button component={Link} to="/contact" variant="outlined" size="large" className={classes.ghost}>
						Get in touch
					</Button>
				</div>
			</section>

			<section className={classes.section}>
				<Typography variant="display1" component="h2" className={classes.sectionTitle}>
					What I bring
				</Typography>
				<div className={classes.highlights}>
					{skills.highlights.map((item, i) => (
						<GlassCard key={item.title} className="fade-up" style={{ animationDelay: `${0.15 * i}s` }}>
							<span className={classes.index}>0{i + 1}</span>
							<Typography variant="title" component="h3" className={classes.cardTitle}>
								{item.title}
							</Typography>
							<Typography className={classes.muted}>{item.desc}</Typography>
						</GlassCard>
					))}
				</div>
			</section>

			<section className={classes.section}>
				<Typography variant="display1" component="h2" className={classes.sectionTitle}>
					Skills & tools
				</Typography>
				<div className={classes.skillGroups}>
					{skills.groups.map((group) => (
						<GlassCard key={group.name}>
							<Typography variant="title" component="h3" className={classes.cardTitle}>
								{group.name}
							</Typography>
							<ul className={classes.chips}>
								{group.list.map((skill) => (
									<li key={skill} className={classes.chip}>
										{skill}
									</li>
								))}
							</ul>
						</GlassCard>
					))}
				</div>
			</section>
		</div>
	);
};

export default withStyles(homeStyle)(Home);
