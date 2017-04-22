export default function messagesModel(status) {
  const messages = {
    won: 'You WONNNNNNNN',
    lost: 'You lost :( :( :(',
    inProgress: ''
  };

  return messages[status];
};