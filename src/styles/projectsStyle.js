const projectsStyle = (theme) => ({
	section: {
		marginTop: theme.spacing.unit * 8
	},
	sectionHeader: {
		marginBottom: theme.spacing.unit * 3
	},
	sectionTitle: {
		marginBottom: theme.spacing.unit,
		fontSize: '1.75rem'
	},
	muted: {
		maxWidth: 640,
		color: theme.palette.text.secondary
	},
	// Cards size to their own content rather than stretching to the tallest
	// one, so a shorter card doesn't end up with a gap above its button.
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
		alignItems: 'start',
		gap: '24px',
		[theme.breakpoints.down('xs')]: {
			gridTemplateColumns: 'minmax(0, 1fr)'
		}
	},
	featuredRow: {
		marginBottom: 24
	},
	// Systems & Experiments and Ongoing Work: side by side from md up,
	// stacked (and width-capped for comfortable reading) below that.
	pair: {
		display: 'grid',
		gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
		gap: '32px',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: 'minmax(0, 1fr)',
			gap: theme.spacing.unit * 8
		}
	},
	pairColumn: {
		display: 'flex',
		flexDirection: 'column',
		[theme.breakpoints.down('sm')]: {
			maxWidth: 680
		}
	},
	stack: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		'& > article': {
			flex: 1
		}
	},
	beyond: {
		padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3.5}px`,
		borderLeft: `3px solid ${theme.palette.secondary.main}`,
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing.unit * 2.5
		}
	},
	beyondTitle: {
		color: theme.palette.secondary.light,
		fontSize: '0.8rem',
		fontWeight: 600,
		letterSpacing: '0.14em',
		textTransform: 'uppercase'
	},
	beyondLead: {
		margin: `${theme.spacing.unit}px 0`,
		maxWidth: 640,
		fontSize: '1.15rem',
		fontWeight: 500,
		lineHeight: 1.5
	}
});
export default projectsStyle;
