const aboutStyle = (theme) => ({
	layout: {
		display: 'grid',
		gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 3fr)',
		gap: '32px',
		alignItems: 'start',
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: 'minmax(0, 1fr)'
		}
	},
	media: {
		display: 'flex',
		flexDirection: 'column',
		gap: '20px'
	},
	photo: {
		width: '100%',
		aspectRatio: '1 / 1',
		objectFit: 'cover',
		borderRadius: 16,
		border: '1px solid rgba(148, 163, 255, 0.14)',
		boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)'
	},
	facts: {
		display: 'grid',
		gap: '12px',
		margin: 0
	},
	fact: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: '16px',
		paddingBottom: '12px',
		borderBottom: '1px solid rgba(148, 163, 255, 0.12)',
		fontSize: '0.95rem',
		'& dt': {
			color: theme.palette.text.secondary
		},
		'& dd': {
			margin: 0,
			textAlign: 'right',
			color: theme.palette.text.primary
		}
	},
	story: {
		padding: theme.spacing.unit * 4,
		[theme.breakpoints.down('xs')]: {
			padding: theme.spacing.unit * 3
		}
	},
	paragraph: {
		marginBottom: theme.spacing.unit * 2.5,
		fontSize: '1.05rem'
	},
	offline: {
		paddingTop: theme.spacing.unit * 2.5,
		borderTop: '1px solid rgba(148, 163, 255, 0.12)',
		color: theme.palette.text.secondary
	}
});
export default aboutStyle;
