import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import GlassCard from '../components/GlassCard';
import homeStyle from '../styles/homeStyle';
import skills from '../data/skills.json';
import profile from '../data/profile.json';

const { hero } = profile;
const [ before, after ] = hero.headline.split(hero.emphasis);

const Home = ({ classes }) => {
	return (
		<div>
			<section className={`${classes.hero} fade-up`}>
				<span className={classes.eyebrow}>{hero.eyebrow}</span>
				<Typography variant="display4" component="h1" className={classes.heading}>
					{before}
					<span className={classes.gradient}>{hero.emphasis}</span>
					{after}
				</Typography>
				<Typography variant="subheading" component="p" className={classes.lead}>
					{hero.body}
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
							<ul className={classes.chips} aria-label={`${group.name} tools`}>
								{group.tools.map((skill) => (
									<li key={skill} className={classes.chip}>
										{skill}
									</li>
								))}
							</ul>
							{group.practices.length > 0 && (
								<div>
									<span className={classes.practicesLabel}>Practices</span>
									<ul className={classes.chips} aria-label={`${group.name} practices`}>
										{group.practices.map((practice) => (
											<li key={practice} className={classes.practice}>
												{practice}
											</li>
										))}
									</ul>
								</div>
							)}
						</GlassCard>
					))}
				</div>
			</section>
		</div>
	);
};

export default withStyles(homeStyle)(Home);
