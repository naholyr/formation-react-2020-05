import React from 'react';
import './Chat.scss';
import CollapsableSection from '../CollapsableSection/CollapsableSection';
import { arrayOf, shape, number, string, func } from 'prop-types';
import { formatDistance, format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { connect } from 'react-redux';
import * as api from '../api';
import * as actions from '../actions';
import cx from 'classnames';

class Chat extends React.Component {
  static propTypes = {
    messages: arrayOf(
      shape({
        author: string.isRequired,
        text: string.isRequired,
        date: number.isRequired,
      }).isRequired
    ),
    username: string,
    loadChatMessages: func.isRequired,
    addChatMessage: func.isRequired,
  };

  static defaultProps = {
    messages: [],
  };

  // Side-effect: load messages
  // This could be in index.js, or in a middleware
  // but we want messages to be load if and only if the component is actually loaded
  componentDidMount() {
    this.props.loadChatMessages();
    this.offChatMessage = api.onChatMessage(this.props.addChatMessage);
  }

  componentWillUnmount() {
    this.offChatMessage();
  }

  formatDateRelative(date) {
    return formatDistance(date, Date.now(), {
      locale: fr,
      includeSeconds: true,
      addSuffix: true,
    });
  }

  formatDateLong(date) {
    return format(date, 'PPpp', { locale: fr });
  }

  // Ref to input, to be able to manipulate its DOM
  // So we keep it uncontrolled, but still can manipulate it's DOM behaviour
  inputRef = React.createRef();

  handlePost = (e) => {
    e.preventDefault();
    const input = this.inputRef.current;
    if (input) {
      api.chatPost(input.value);
      // Reset & focus
      input.value = '';
      input.focus();
    }
  };

  render() {
    const { messages, username } = this.props;

    return (
      <CollapsableSection
        initialCollapsed={false}
        className="Chat"
        title="Chat"
      >
        <section className="ChatPost if-expanded">
          <h3>Poster un commentaire</h3>
          <form onSubmit={this.handlePost}>
            <input
              ref={this.inputRef}
              type="text"
              placeholder="Votre message"
              autoFocus
            />
            <button type="submit">Envoyer votre message</button>
          </form>
        </section>

        <p>
          <span className="count">{messages.length}</span> message
          {messages.length > 1 ? 's' : ''}
        </p>
        <ul className="if-expanded">
          {messages.map((m) => (
            <li key={m.date} className={cx({ myself: m.author === username })}>
              <div className="info">
                <strong title={m.author}>{m.author}</strong>
                <time title={this.formatDateLong(m.date)}>
                  {this.formatDateRelative(m.date)}
                </time>
              </div>
              <p>{m.text}</p>
            </li>
          ))}
        </ul>
      </CollapsableSection>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.chatMessages,
    username: state.username,
  };
};

const mapDispatchToProps = {
  loadChatMessages: actions.loadChatMessages,
  addChatMessage: actions.addChatMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
