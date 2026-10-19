const basicCardStyle = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		overflow: 'hidden'
	},
	// Every screenshot gets the same 16:10 stage so cards line up.
	media: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		aspectRatio: '16 / 10',
		overflow: 'hidden',
		background: 'radial-gradient(circle at 50% 120%, rgba(124, 156, 255, 0.18), #0b0d1c 70%)',
		borderBottom: '1px solid rgba(148, 163, 255, 0.12)'
	},
	image: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'cover',
		objectPosition: 'top'
	},
	device: {
		height: '84%',
		aspectRatio: '1 / 1',
		padding: 6,
		borderRadius: 26,
		background: '#05060f',
		border: '1px solid rgba(148, 163, 255, 0.28)',
		boxShadow: '0 16px 40px rgba(0, 0, 0, 0.55)'
	},
	deviceImage: {
		display: 'block',
		width: '100%',
		height: '100%',
		objectFit: 'contain',
		borderRadius: 20
	},
	body: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		padding: theme.spacing.unit * 3
	},
	meta: {
		display: 'flex',
		flexWrap: 'wrap',
		alignItems: 'center',
		gap: '8px 12px',
		marginBottom: theme.spacing.unit * 1.5
	},
	kind: {
		color: theme.palette.text.secondary,
		fontSize: '0.75rem',
		fontWeight: 600,
		letterSpacing: '0.12em',
		textTransform: 'uppercase'
	},
	status: {
		padding: '2px 10px',
		borderRadius: 999,
		fontSize: '0.75rem',
		fontWeight: 600,
		border: '1px solid transparent'
	},
	released: {
		background: 'rgba(94, 234, 212, 0.16)',
		borderColor: 'rgba(94, 234, 212, 0.45)',
		color: theme.palette.secondary.light
	},
	live: {
		background: 'rgba(94, 234, 212, 0.1)',
		borderColor: 'rgba(94, 234, 212, 0.3)',
		color: theme.palette.secondary.light
	},
	development: {
		borderColor: 'rgba(124, 156, 255, 0.45)',
		color: theme.palette.primary.light
	},
	private: {
		borderStyle: 'dashed',
		borderColor: 'rgba(154, 161, 194, 0.4)',
		color: theme.palette.text.secondary,
		background: 'rgba(16, 19, 38, 0.4)',
		boxShadow: 'none',
		'&:hover': {
			borderColor: 'rgba(154, 161, 194, 0.4)'
		}
	},
	note: {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		color: theme.palette.primary.light,
		fontSize: '0.85rem',
		'&::before': {
			content: '""',
			width: 6,
			height: 6,
			borderRadius: '50%',
			border: `1px solid ${theme.palette.primary.light}`
		}
	},
	title: {
		marginBottom: theme.spacing.unit
	},
	desc: {
		color: theme.palette.text.secondary
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
		padding: '4px 10px',
		borderRadius: 999,
		background: 'rgba(124, 156, 255, 0.08)',
		border: '1px solid rgba(124, 156, 255, 0.2)',
		color: theme.palette.text.primary,
		fontSize: '0.8rem'
	},
	actions: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '10px',
		marginTop: 'auto',
		paddingTop: theme.spacing.unit * 3
	},
	secondary: {
		borderRadius: 999,
		color: theme.palette.text.primary,
		borderColor: 'rgba(148, 163, 255, 0.35)'
	},
	icon: {
		marginLeft: theme.spacing.unit,
		fontSize: 18
	},
	// A featured card sits on its own row with the screenshot beside the text
	// on wide screens; narrower screens get the regular stacked card. These
	// rules come last so they override the base media/device/body rules.
	featured: {
		[theme.breakpoints.up('md')]: {
			flexDirection: 'row'
		}
	},
	featuredMedia: {
		[theme.breakpoints.only('sm')]: {
			aspectRatio: '2 / 1'
		},
		[theme.breakpoints.up('md')]: {
			flex: '0 0 40%',
			aspectRatio: 'auto',
			minHeight: 320,
			borderBottom: 0,
			borderRight: '1px solid rgba(148, 163, 255, 0.12)'
		}
	},
	featuredDevice: {
		[theme.breakpoints.up('md')]: {
			height: 'auto',
			width: '72%',
			maxWidth: 300
		}
	},
	featuredBody: {
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing.unit * 4
		}
	}
});
export default basicCardStyle;
