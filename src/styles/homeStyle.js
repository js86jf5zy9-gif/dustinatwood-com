const homeStyle = (theme) => ({
	hero: {
		minHeight: 'calc(100vh - 68px - 160px)',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		paddingBottom: theme.spacing.unit * 6
	},
	eyebrow: {
		marginBottom: theme.spacing.unit * 2,
		color: theme.palette.secondary.main,
		fontSize: '0.85rem',
		fontWeight: 600,
		letterSpacing: '0.14em',
		textTransform: 'uppercase'
	},
	heading: {
		fontSize: '4.5rem',
		lineHeight: 1.05,
		[theme.breakpoints.down('sm')]: {
			fontSize: '3.25rem'
		},
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.5rem'
		}
	},
	gradient: {
		background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
		WebkitBackgroundClip: 'text',
		backgroundClip: 'text',
		color: 'transparent'
	},
	lead: {
		marginTop: theme.spacing.unit * 3,
		maxWidth: 660,
		color: theme.palette.text.secondary,
		fontSize: '1.2rem'
	},
	actions: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '12px',
		marginTop: theme.spacing.unit * 5
	},
	ghost: {
		borderRadius: 999,
		color: theme.palette.text.primary,
		borderColor: 'rgba(148, 163, 255, 0.35)'
	},
	section: {
		marginTop: theme.spacing.unit * 10
	},
	sectionTitle: {
		marginBottom: theme.spacing.unit * 3,
		fontSize: '1.75rem'
	},
	highlights: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
		gap: '20px'
	},
	index: {
		display: 'block',
		marginBottom: theme.spacing.unit * 1.5,
		color: theme.palette.primary.main,
		fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
		fontSize: '0.85rem'
	},
	cardTitle: {
		marginBottom: theme.spacing.unit
	},
	muted: {
		color: theme.palette.text.secondary
	},
	skillGroups: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
		gap: '20px'
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '8px',
		margin: `${theme.spacing.unit * 2}px 0 0`,
		padding: 0,
		listStyle: 'none'
	},
	chip: {
		padding: '6px 12px',
		borderRadius: 999,
		background: 'rgba(124, 156, 255, 0.1)',
		border: '1px solid rgba(124, 156, 255, 0.2)',
		color: theme.palette.text.primary,
		fontSize: '0.85rem'
	},
	practicesLabel: {
		display: 'block',
		marginTop: theme.spacing.unit * 2.5,
		color: theme.palette.text.secondary,
		fontSize: '0.75rem',
		fontWeight: 600,
		letterSpacing: '0.12em',
		textTransform: 'uppercase'
	},
	practice: {
		padding: '6px 12px',
		borderRadius: 999,
		border: '1px dashed rgba(94, 234, 212, 0.35)',
		color: theme.palette.secondary.light,
		fontSize: '0.85rem'
	}
});

export default homeStyle;
