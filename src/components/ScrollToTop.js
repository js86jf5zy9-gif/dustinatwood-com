import { Component } from 'react';
import { withRouter } from 'react-router-dom';

// React Router v4 keeps the scroll position between routes; reset it so each
// page starts at the top.
class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			window.scrollTo(0, 0);
		}
	}

	render() {
		return null;
	}
}

export default withRouter(ScrollToTop);
