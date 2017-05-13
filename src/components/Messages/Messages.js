import React, { Component } from 'react';
import PropTypes from 'prop-types';
import messagesModel from './messages_model';
import './Messages.css';

class Messages extends Component {
  render() {
    return <div className="messages">{messagesModel(this.props.status)}</div>
  }
}

Messages.propTypes = {
  status: PropTypes.string.isRequired
};

export default Messages;