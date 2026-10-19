const headerStyle = (theme) => ({
	header: {
		marginBottom: theme.spacing.unit * 5
	},
	eyebrow: {
		display: 'inline-block',
		marginBottom: theme.spacing.unit * 1.5,
		color: theme.palette.secondary.main,
		fontSize: '0.8rem',
		fontWeight: 600,
		letterSpacing: '0.14em',
		textTransform: 'uppercase'
	},
	heading: {
		fontSize: '2.75rem',
		lineHeight: 1.1,
		[theme.breakpoints.down('xs')]: {
			fontSize: '2.1rem'
		}
	},
	subtitle: {
		marginTop: theme.spacing.unit * 2,
		maxWidth: 640,
		color: theme.palette.text.secondary,
		fontSize: '1.1rem'
	}
});
export default headerStyle;
