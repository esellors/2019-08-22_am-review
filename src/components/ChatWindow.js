import React, { Component } from 'react';

export default class ChatWindow extends Component {
	render() {
		return (
			<div id="chat-window">
				{
					this.props.conversation.map((message, i) => {
						return (
							<h4 key={i}>{message}</h4>
						);
					})
				}
			</div>
		);
	}
}
