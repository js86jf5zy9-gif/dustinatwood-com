const glassCardStyle = (theme) => ({
	card: {
		position: 'relative',
		padding: theme.spacing.unit * 3,
		borderRadius: 16,
		background: 'rgba(16, 19, 38, 0.62)',
		border: '1px solid rgba(148, 163, 255, 0.14)',
		backdropFilter: 'blur(12px)',
		WebkitBackdropFilter: 'blur(12px)',
		boxShadow: '0 10px 40px rgba(0, 0, 0, 0.35)',
		transition: 'border-color 200ms ease, transform 200ms ease',
		'&:hover': {
			borderColor: 'rgba(124, 156, 255, 0.35)'
		}
	}
});

export default glassCardStyle;
