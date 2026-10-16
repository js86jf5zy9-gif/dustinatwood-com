import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Header from '../components/Header';
import BasicCard from '../components/BasicCard';
import projectsStyle from '../styles/projectsStyle';

import dataProjects from '../data/projects.json';

const images = require.context('../images', true);

const Projects = ({ classes }) => {
	return (
		<div>
			<Header eyebrow="Projects" subtitle="Products I designed, built and run on AWS, end to end.">
				Featured work
			</Header>
			<div className={classes.grid}>
				{dataProjects.map((proj, i) => (
					<BasicCard
						key={proj.name}
						{...proj}
						image={images(`./${proj.name}.png`)}
						style={{ animationDelay: `${0.15 * i}s` }}
					/>
				))}
			</div>
		</div>
	);
};
export default withStyles(projectsStyle)(Projects);
