
import React, { Component } from 'react';

export class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", fname: "", lname: "", wins: "", lost: "" };

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ value: event.target.value });

	}

	handleSubmit(event) {
		alert('A name was submitted: ' + this.state.value);
		event.preventDefault();
		console.log(this.state.value)

	}

	render() {
		const { createPlayer } = this.props;
		return (
			<form id="inputFields"
				onSubmit={() => {
					createPlayer({ username: this.state.username, fname: this.state.fname, lname: this.state.lname, wins: 0, lost: 0 })
					this.setState({username: "", fname: "", lname: ""})
				}}>
				
				{/* <label>Username:    */}
				<input 

					onChange={({ target }) =>
						this.setState(({ text }) => ({ username: target.value }))
					}
					type="txt" name="username" placeholder="Username" />
					{/* </label> */}
					<p></p>

				<input 
					onChange={({ target }) =>
						this.setState(({ text }) => ({ fname: target.value }))
					}
					type="txt" name="fname" placeholder="First Name" />
					<p>

					</p>
				<input 
					onChange={({ target }) =>
						this.setState(({ text }) => ({ lname: target.value }))
					}
					type="txt" name="lname" placeholder="LastName" />
				<p></p>
				<input type="submit" name="Submit" text="Submit"/>
			</form>
		);
	}
}