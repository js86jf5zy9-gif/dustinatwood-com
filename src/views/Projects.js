import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import GlassCard from '../components/GlassCard';
import BasicCard from '../components/BasicCard';
import projectsStyle from '../styles/projectsStyle';

import projectData from '../data/projects.json';

const { intro, beyond, categories, projects } = projectData;
const images = require.context('../images', true);

const ProjectSection = ({ classes, category, className = '', gridClassName }) => {
	const items = projects.filter((proj) => proj.category === category.key);
	if (items.length === 0) return null;

	const renderCard = (proj, i) => (
		<BasicCard
			key={proj.name}
			{...proj}
			image={proj.image && images(`./${proj.image}`)}
			style={{ animationDelay: `${0.15 * i}s` }}
		/>
	);
	const featured = items.filter((proj) => proj.featured);
	const rest = items.filter((proj) => !proj.featured);

	const headingId = `projects-${category.key}`;
	return (
		<section className={className} aria-labelledby={headingId}>
			<div className={classes.sectionHeader}>
				<Typography variant="display1" component="h2" id={headingId} className={classes.sectionTitle}>
					{category.title}
				</Typography>
				<Typography className={classes.muted}>{category.desc}</Typography>
			</div>
			{featured.length > 0 && <div className={classes.featuredRow}>{featured.map(renderCard)}</div>}
			<div className={gridClassName}>{rest.map(renderCard)}</div>
		</section>
	);
};

const Projects = ({ classes }) => {
	// Applications get the full-width grid; the independent-work categories
	// share one row so each single card isn't stranded in its own section.
	const [ applications, ...independent ] = categories;
	return (
		<div>
			<Header eyebrow={intro.eyebrow} subtitle={intro.body}>
				{intro.headline}
			</Header>

			<ProjectSection
				classes={classes}
				category={applications}
				className={classes.section}
				gridClassName={classes.grid}
			/>

			<section className={classes.section} aria-labelledby="projects-beyond">
				<GlassCard className={classes.beyond}>
					<Typography variant="title" component="h2" id="projects-beyond" className={classes.beyondTitle}>
						{beyond.title}
					</Typography>
					<Typography className={classes.beyondLead}>{beyond.lead}</Typography>
					<Typography className={classes.muted}>{beyond.body}</Typography>
				</GlassCard>
			</section>

			<div className={`${classes.section} ${classes.pair}`}>
				{independent.map((category) => (
					<ProjectSection
						key={category.key}
						classes={classes}
						category={category}
						className={classes.pairColumn}
						gridClassName={classes.stack}
					/>
				))}
			</div>
		</div>
	);
};
export default withStyles(projectsStyle)(Projects);
