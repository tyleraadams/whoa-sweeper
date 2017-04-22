import React, { Component } from 'react';
import messagesModel from './messages_model';

class Messages extends Component {
  render() {
    return <div className="messages">{messagesModel(this.props.status)}</div>
  }
}

export default Messages;