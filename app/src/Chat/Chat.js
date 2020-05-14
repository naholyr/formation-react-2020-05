import React from 'react';
import './Chat.scss';
import CollapsableSection from '../CollapsableSection/CollapsableSection';
import { arrayOf, shape, number, string } from 'prop-types';
import { formatDistance, format } from 'date-fns';
import { fr } from 'date-fns/locale';

class Chat extends React.Component {
  static propTypes = {
    messages: arrayOf(
      shape({
        author: string.isRequired,
        text: string.isRequired,
        date: number.isRequired,
      }).isRequired
    ),
  };

  static defaultProps = {
    messages: [
      {
        author: 'Fake user',
        text: 'Fake message',
        date: 1589488113914,
      },
    ],
  };

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

  render() {
    const { messages } = this.props;

    return (
      <CollapsableSection
        initialCollapsed={false}
        className="Chat"
        title="Chat"
      >
        <section className="ChatPost if-expanded">
          <h3>Poster un commentaire</h3>
          <form>
            <input type="text" placeholder="Votre message" autoFocus />
            <button type="submit">Envoyer votre message</button>
          </form>
        </section>

        <p>
          <span className="count">{messages.length}</span> message
          {messages.length > 1 ? 's' : ''}
        </p>
        <ul className="if-expanded">
          {messages.map((m) => (
            <li key={m.date}>
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

export default Chat;
