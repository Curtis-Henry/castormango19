
import React, { Component } from 'react';

export class NameForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { username: "", fname: "", lname: "", wins: "", lost: "" };

	}

	addPlayer()
	{
		this.props.createPlayer({ username: this.state.username, fname: this.state.fname, lname: this.state.lname, wins: 0, lost: 0 })
		this.setState({username: "", fname: "", lname: "", round: 0,match: 0})
	}

	randomizePLayers() {
		// let playersCopy = this.props.players;
		// let newCopy = [];
		// let numList = []

		// while(newCopy.length != this.props.totCount)
		// {
		// 	let i = -1
		// 	while(numList.includes(i) || i < 0)
		// 	{
		// 		i = Math.floor((Math.random()*this.props.totCount)+0)
		// 	}

		// 	numList.push(i);

		// 	newCopy.push(playersCopy[i])

		// }
		this.props.createBracket({match:"0",round:"0",players:[{username: "test1"},{username: "test2"}]})
			
	  }

	render() {
		const { createPlayer } = this.props.createPlayer;
		const { players } = this.props.players;
		const { totCount } = this.props.totCount;
		// const { bracketCreate } = this.props.bracketCreate;
		const {createBracket } = this.props.createBracket;
		return (
			<form id="inputFields"
				// onSubmit={() => {
				// 	createPlayer({ username: this.state.username, fname: this.state.fname, lname: this.state.lname, wins: 0, lost: 0 })
				// 	this.setState({username: "", fname: "", lname: ""})
				// }}
				>
				
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
				{/* <input type="submit" name="Submit" text="Submit"/> */}
				<button onClick={() => this.addPlayer()}>Add Player</button>
				<p></p>
				<button onClick={() => this.randomizePLayers()}>BEGIN</button>

				
			</form>
		);
	}
}