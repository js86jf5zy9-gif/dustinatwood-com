import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { OpenInNew } from '@material-ui/icons';
import GlassCard from './GlassCard';
import basicCardStyle from '../styles/basicCardStyle';

const ExternalButton = ({ classes, href, label, variant, className }) => (
	<Button
		variant={variant}
		color="primary"
		href={href}
		target="_blank"
		rel="noopener noreferrer"
		className={className}>
		{label}
		<OpenInNew className={classes.icon} aria-hidden="true" />
	</Button>
);

const BasicCard = ({
	link,
	linkLabel,
	secondaryLink,
	secondaryLinkLabel,
	label,
	kind,
	status,
	statusTone,
	note,
	desc,
	tech,
	image,
	imageAlt,
	imageFit,
	featured,
	style,
	classes
}) => {
	const isPrivate = statusTone === 'private';
	const cardClass = [
		classes.root,
		featured ? classes.featured : '',
		isPrivate ? classes.private : '',
		'fade-up'
	].join(' ');

	return (
		<GlassCard component="article" className={cardClass} style={style}>
			{image && (
				<div className={featured ? `${classes.media} ${classes.featuredMedia}` : classes.media}>
					{imageFit === 'device' ? (
						// Phone screenshots sit in a device-style frame instead of being
						// cropped to fill the wide media area.
						<div className={featured ? `${classes.device} ${classes.featuredDevice}` : classes.device}>
							<img src={image} alt={imageAlt} className={classes.deviceImage} />
						</div>
					) : (
						<img src={image} alt={imageAlt} className={classes.image} />
					)}
				</div>
			)}
			<div className={featured ? `${classes.body} ${classes.featuredBody}` : classes.body}>
				<div className={classes.meta}>
					<span className={classes.kind}>{kind}</span>
					{status && <span className={`${classes.status} ${classes[statusTone] || ''}`}>{status}</span>}
					{note && <span className={classes.note}>{note}</span>}
				</div>
				<Typography variant="headline" component="h3" className={classes.title}>
					{label}
				</Typography>
				<Typography className={classes.desc}>{desc}</Typography>
				<ul className={classes.chips} aria-label={`${label} themes`}>
					{tech.split(',').map((t) => (
						<li key={t} className={classes.chip}>
							{t}
						</li>
					))}
				</ul>
				{link && (
					<div className={classes.actions}>
						<ExternalButton classes={classes} href={link} label={linkLabel || 'Visit'} variant="raised" />
						{secondaryLink && (
							<ExternalButton
								classes={classes}
								href={secondaryLink}
								label={secondaryLinkLabel}
								variant="outlined"
								className={classes.secondary}
							/>
						)}
					</div>
				)}
			</div>
		</GlassCard>
	);
};
export default withStyles(basicCardStyle)(BasicCard);
