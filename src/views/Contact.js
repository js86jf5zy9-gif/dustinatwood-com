import React, { Component } from 'react';
import { TextField, Button, Typography, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import contactStyle from '../styles/contactStyle';
import Header from '../components/Header';
import GlassCard from '../components/GlassCard';
import formFields from '../components/formFields';
import { FORMSPREE_ENDPOINT, FORMSPREE_CONFIGURED } from '../config';

// Submits straight to Formspree from the browser (no backend), then routes to
// the hidden /thanks page. The form keeps a real action/method so it still
// posts to Formspree if the script-driven submit is unavailable.
class Contact extends Component {
	state = {
		sending: false,
		error: null
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (!FORMSPREE_CONFIGURED) {
			this.setState({ error: 'The contact form is not configured yet. Please reach out on LinkedIn or GitHub.' });
			return;
		}

		this.setState({ sending: true, error: null });
		fetch(FORMSPREE_ENDPOINT, {
			method: 'POST',
			body: new FormData(event.target),
			headers: { Accept: 'application/json' }
		})
			.then((response) => {
				if (!response.ok) throw new Error(`Formspree responded with ${response.status}`);
				this.props.history.push('/thanks');
			})
			.catch(() => {
				this.setState({ sending: false, error: 'Something went wrong sending your message. Please try again.' });
			});
	};

	render() {
		const { classes } = this.props;
		const { sending, error } = this.state;
		return (
			<div className={classes.wrapper}>
				<Header eyebrow="Contact" subtitle="Have a project, a role, or just want to say hi? Send a note and I'll get back to you soon.">
					Let's build something.
				</Header>
				<GlassCard className="fade-up">
					<form action={FORMSPREE_ENDPOINT} method="POST" onSubmit={this.handleSubmit} className={classes.form}>
						{formFields.map(({ label, name, placeholder, fieldType, multiline }) => (
							<TextField
								key={name}
								label={label}
								type={fieldType}
								name={name}
								placeholder={placeholder}
								multiline={multiline}
								rows={multiline ? 5 : undefined}
								required
								fullWidth
							/>
						))}
						{/* Honeypot field: Formspree drops submissions that fill it in. */}
						<input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className={classes.honeypot} />
						{error && (
							<Typography role="alert" className={classes.error}>
								{error}
							</Typography>
						)}
						<Button
							type="submit"
							variant="raised"
							size="large"
							color="primary"
							disabled={sending}
							className={classes.button}>
							{sending ? <CircularProgress size={22} color="inherit" /> : 'Send message'}
						</Button>
					</form>
				</GlassCard>
			</div>
		);
	}
}
export default withStyles(contactStyle)(Contact);
