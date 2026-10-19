import React, { Component } from 'react';
import { Snackbar, Button } from '@material-ui/core';
import { SW_UPDATE_EVENT } from '../registerServiceWorker';

// Shown when the service worker has precached a newer deploy.
class UpdateNotice extends Component {
	state = {
		open: false
	};

	componentDidMount() {
		window.addEventListener(SW_UPDATE_EVENT, this.show);
	}

	componentWillUnmount() {
		window.removeEventListener(SW_UPDATE_EVENT, this.show);
	}

	show = () => this.setState({ open: true });

	hide = () => this.setState({ open: false });

	render() {
		return (
			<Snackbar
				anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
				open={this.state.open}
				onClose={this.hide}
				message="A new version of this site is available."
				action={
					<Button color="secondary" size="small" onClick={() => window.location.reload()}>
						Refresh
					</Button>
				}
			/>
		);
	}
}

export default UpdateNotice;
