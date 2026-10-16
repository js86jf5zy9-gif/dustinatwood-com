const footerStyle = (theme) => ({
	footer: {
		borderTop: '1px solid rgba(148, 163, 255, 0.1)',
		background: 'rgba(5, 6, 15, 0.6)',
		backdropFilter: 'blur(10px)'
	},
	container: {
		maxWidth: 1080,
		margin: '0 auto',
		padding: '24px 20px',
		display: 'flex',
		flexWrap: 'wrap',
		gap: '12px 24px',
		alignItems: 'center',
		justifyContent: 'space-between'
	},
	copyright: {
		color: theme.palette.text.secondary,
		fontSize: '0.875rem'
	},
	links: {
		display: 'flex',
		flexWrap: 'wrap',
		gap: '4px 18px'
	},
	link: {
		color: theme.palette.text.secondary,
		fontSize: '0.875rem',
		transition: 'color 150ms ease',
		'&:hover': {
			color: theme.palette.primary.light
		}
	}
});

export default footerStyle;
