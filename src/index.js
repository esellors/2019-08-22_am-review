import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';
import {responses} from './responses';

export default class App extends Component {
	constructor() {
		super();
		this.state = {
			conversation: []
		}
		this.processMessages = this.processMessages.bind(this);
	}
	processMessages(question) {
		const addQuestion = [`QUESTION: ${question}`, ...this.state.conversation]

		let randomIndex = Math.floor(Math.random() * responses.length);

		const addResponse = [`RESPONSE: ${responses[randomIndex]}`, ...addQuestion]

		this.setState({ conversation: addResponse })
	}
	render() {
		return (
			<div id="container">
				<h2>yes or no, you wanna know?</h2>
				<ChatWindow conversation={this.state.conversation} />
				<ChatInput processMessages={this.processMessages} />
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
