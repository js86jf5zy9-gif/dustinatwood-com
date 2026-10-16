import { createMuiTheme } from '@material-ui/core/styles';

const fontFamily = [ 'Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif' ].join(',');

const appTheme = createMuiTheme({
	palette: {
		type: 'dark',
		primary: {
			light: '#a8bcff',
			main: '#7c9cff',
			dark: '#4b6fe0',
			contrastText: '#05060f'
		},
		secondary: {
			light: '#99f6e4',
			main: '#5eead4',
			dark: '#14b8a6',
			contrastText: '#05060f'
		},
		text: {
			primary: '#e7e9f5',
			secondary: '#9aa1c2'
		},
		background: {
			default: '#05060f',
			paper: 'rgba(16, 19, 38, 0.62)'
		}
	},
	shape: {
		borderRadius: 12
	},
	typography: {
		fontFamily,
		display4: { fontFamily, fontWeight: 700, letterSpacing: '-0.04em', color: '#e7e9f5' },
		display3: { fontFamily, fontWeight: 700, letterSpacing: '-0.03em', color: '#e7e9f5' },
		display2: { fontFamily, fontWeight: 700, letterSpacing: '-0.02em', color: '#e7e9f5' },
		display1: { fontFamily, fontWeight: 600, color: '#e7e9f5' },
		headline: { fontFamily, fontWeight: 600 },
		title: { fontFamily, fontWeight: 600 },
		subheading: { fontFamily, lineHeight: 1.7 },
		body1: { fontFamily, lineHeight: 1.7 },
		button: { fontFamily, fontWeight: 600, textTransform: 'none', letterSpacing: 0 }
	},
	overrides: {
		MuiButton: {
			root: { borderRadius: 999, padding: '10px 22px' }
		},
		MuiPaper: {
			root: { backdropFilter: 'blur(10px)' }
		}
	}
});

export default appTheme;
