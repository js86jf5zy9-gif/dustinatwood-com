const navbarStyle = (theme) => ({
	appBar: {
		position: 'sticky',
		top: 0,
		zIndex: theme.zIndex.appBar,
		background: 'rgba(5, 6, 15, 0.55)',
		backdropFilter: 'saturate(160%) blur(14px)',
		WebkitBackdropFilter: 'saturate(160%) blur(14px)',
		borderBottom: '1px solid rgba(148, 163, 255, 0.1)'
	},
	container: {
		maxWidth: 1080,
		height: 68,
		margin: '0 auto',
		padding: '0 20px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		color: theme.palette.text.primary
	},
	brand: {
		display: 'flex',
		alignItems: 'center',
		gap: '12px',
		color: theme.palette.text.primary,
		fontWeight: 700,
		fontSize: '1.05rem',
		letterSpacing: '-0.01em'
	},
	avatar: {
		width: 36,
		height: 36,
		border: `2px solid ${theme.palette.primary.main}`
	},
	links: {
		display: 'flex',
		gap: '4px'
	},
	link: {
		display: 'block',
		padding: '8px 14px',
		borderRadius: 999,
		color: theme.palette.text.secondary,
		fontWeight: 500,
		fontSize: '0.95rem',
		transition: 'color 150ms ease, background-color 150ms ease',
		'&:hover': {
			color: theme.palette.text.primary,
			backgroundColor: 'rgba(124, 156, 255, 0.1)'
		}
	},
	active: {
		color: theme.palette.text.primary,
		backgroundColor: 'rgba(124, 156, 255, 0.16)'
	},
	drawerPaper: {
		background: 'rgba(8, 10, 24, 0.96)'
	},
	drawer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'stretch',
		textAlign: 'center',
		padding: '12px 16px 24px',
		color: theme.palette.text.primary,
		outline: 'none'
	},
	closeButton: {
		alignSelf: 'flex-end'
	}
});

export default navbarStyle;
