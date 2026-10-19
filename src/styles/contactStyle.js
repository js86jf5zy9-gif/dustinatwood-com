const contactStyle = (theme) => ({
	wrapper: {
		maxWidth: 720,
		margin: '0 auto'
	},
	form: {
		display: 'flex',
		flexDirection: 'column',
		gap: '24px',
		padding: theme.spacing.unit
	},
	honeypot: {
		position: 'absolute',
		left: -9999,
		width: 1,
		height: 1,
		opacity: 0
	},
	error: {
		color: '#fca5a5'
	},
	button: {
		alignSelf: 'flex-start',
		minWidth: 180
	},
	center: {
		textAlign: 'center',
		padding: `${theme.spacing.unit * 8}px 0`
	},
	icon: {
		fontSize: 64,
		color: theme.palette.secondary.main,
		marginBottom: theme.spacing.unit * 2
	},
	muted: {
		maxWidth: 480,
		margin: `${theme.spacing.unit * 2}px auto ${theme.spacing.unit * 4}px`,
		color: theme.palette.text.secondary
	}
});
export default contactStyle;
