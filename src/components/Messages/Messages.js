import React, { Component } from 'react';

class Messages extends Component {
  render() {
    return <div className="messages">{this.props.status}</div>
  }
}

export default Messages;