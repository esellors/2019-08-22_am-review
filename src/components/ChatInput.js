import React, { Component } from 'react';

export default class ChatInput extends Component {
	constructor() {
		super();
		this.state = {
			input: ''
		};
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleInput(e) {
		this.setState({ input: e.target.value });
	}
	handleSubmit() {
		if (!this.state.input) return;

		this.props.processMessages(this.state.input);
		this.setState({ input: '' });
	}
	render() {
		return (
			<div id="chat-input">
				<input 
					onChange={this.handleInput} 
					value={this.state.input}
					placeholder='type something...'
				/>
				<button id='chat-submit' onClick={this.handleSubmit}>Ask!</button>
			</div>
		);
	}
}
