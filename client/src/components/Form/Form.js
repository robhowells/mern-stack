import React from 'react';
import axios from 'axios';

class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			nominee: '',
			message: '',
			submitted: false
		};
		this.updateNominee = this.updateNominee.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this.postNomination = this.postNomination.bind(this);
	}

	updateNominee(event) {
		const nominee = event.target.value;
		this.setState({
			nominee,
		});
	}

	updateMessage(event) {
		const message = event.target.value;
		this.setState({
			message,
		});
	}

	postNomination(event) {
		const { nominee, message } = this.state;
		const nomination = { nominee, message };

		if (nominee && nominee.length > 0) {
			axios.post('/api/nominate', nomination)
				.then(res => {
					if (res.data) {
						this.setState({
							nominee: '',
							message: '',
							submitted: true
						})
					}
				})
				.catch(err => console.log(err))
		} else {
			console.log('Please enter a nominee');
		}
		event.preventDefault();
	}

	render() {
		const { nominee, message, submitted } = this.state;

		return (
			<>
				<h1>Nomination</h1>
				{! submitted &&
					<form onSubmit={this.postNomination}>
						<div>
							<label htmlFor="nominee">Nominee</label>
							<input type="text" id="nominee" value={nominee} onChange={this.updateNominee} />
						</div>
						<div>
							<label htmlFor="message">Message</label>
							<textarea id="message" value={message} onChange={this.updateMessage} />
						</div>
						<button type="submit">Submit</button>
					</form>}
				{submitted && 
				<div>Thanks for submitting a nomination</div>}
			</>
		)
	}
}

export default Form;
