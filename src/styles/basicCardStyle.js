const basicCardStyle = (theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		padding: 0,
		overflow: 'hidden',
		'&:hover': {
			transform: 'translateY(-4px)'
		}
	},
	media: {
		display: 'block',
		overflow: 'hidden',
		background: '#0b0d1c'
	},
	image: {
		display: 'block',
		width: '100%',
		height: 240,
		objectFit: 'cover',
		objectPosition: 'top',
		transition: 'transform 400ms ease',
		'&:hover': {
			transform: 'scale(1.03)'
		}
	},
	body: {
		display: 'flex',
		flexDirection: 'column',
		flex: 1,
		padding: theme.spacing.unit * 3
	},
	title: {
		marginBottom: theme.spacing.unit
	},
	desc: {
		color: theme.palette.text.secondary,
		'&::first-letter': {
			textTransform: 'uppercase'
		}
	},
	chips: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '8px',
		margin: `${theme.spacing.unit * 2}px 0 ${theme.spacing.unit * 3}px`,
		padding: 0,
		listStyle: 'none'
	},
	chip: {
		padding: '4px 10px',
		borderRadius: 999,
		background: 'rgba(94, 234, 212, 0.08)',
		border: '1px solid rgba(94, 234, 212, 0.22)',
		color: theme.palette.secondary.light,
		fontSize: '0.8rem'
	},
	button: {
		alignSelf: 'flex-start',
		marginTop: 'auto'
	},
	icon: {
		marginLeft: theme.spacing.unit,
		fontSize: 18
	}
});
export default basicCardStyle;
