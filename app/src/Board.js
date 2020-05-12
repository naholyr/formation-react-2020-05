import React from 'react';
import './Board.scss';
import { bool } from 'prop-types';
import cx from 'classnames';

const collapsed = false;
const openMessage = true;

class Board extends React.Component {
  static propTypes = {
    authenticated: bool,
  };

  static defaultProps = {
    authenticated: false,
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    // TODO toggle collapsed
  };

  closeMessage = (e) => {
    e.preventDefault();
    // TODO toggle openMessage
  };

  openMessage = (e, id) => {
    e.preventDefault();
    // TODO toggle openMessage
  };

  render() {
    return (
      <section className={cx('Board', { collapsed })}>
        <h2>
          Forum
          <button onClick={this.toggleCollapse}>{collapsed ? '+' : '-'}</button>
        </h2>

        {openMessage && (
          <section className="if-expanded BoardMessage">
            <h3>
              Sujet du message sélectionné
              <button onClick={this.handleCloseMessage}>×</button>
            </h3>

            <div className="info">
              <strong>Quelqu'un</strong>
              <time title="11 mai 2020 10:00">il y a 3 jours</time>
            </div>
            <div className="message">
              Texte du message sélectionné (idée: on pourrait gérer du
              Markdown ?)
            </div>

            <p>2 réponses</p>
            <ul className="BoardMessageReplies">
              <li>
                <div className="info">
                  <strong>Quelqu'un d'autre</strong>
                  <time title="11 mai 2020 10:02">2 minutes après</time>
                </div>
                <div className="message">Je ne suis pas d'accord</div>
              </li>
              <li>
                <div className="info">
                  <strong>Quelqu'un d'autre</strong>
                  <time title="11 mai 2020 11:50">environ 2 heures après</time>
                </div>
                <div className="message">
                  Toi t'es jamais d'accord de toute façon
                </div>
              </li>
            </ul>

            <section className="BoardReply">
              <h4>Répondre à ce message</h4>
              <form>
                <textarea
                  rows={5}
                  placeholder="Le texte de votre message (TODO autoriser le Markdown ?)"
                ></textarea>
                <button type="submit">Poster votre réponse</button>
              </form>
            </section>
          </section>
        )}

        <p>
          <span className="count">3</span> messages
        </p>

        <ul className="if-expanded">
          <li>
            <a href="#message" onClick={(e) => this.openMessage(e, 1)}>
              Second message avec un titre très long qu'on devrait peut-être
              tronquer parce que sinon ça va prendre une place folle et on n'a
              pas que ça à faire d'afficher des romans, mais peut-être aussi
              qu'on devrait simplement limiter la taille des sujets ?
            </a>
            par
            <strong>Quelqu'un d'autre</strong>
            <time title="12 mai 2020 09:53">il y a quelques instants</time>
          </li>
          <li>
            <a href="#message" onClick={(e) => this.openMessage(e, 2)}>
              Premier message
            </a>
            par
            <strong>Quelqu'un</strong>
            <time title="12 mai 2020 09:52">il y a quelques instants</time>
          </li>
          <li>
            <a href="#message" onClick={(e) => this.openMessage(e, 3)}>
              Message d'intro
            </a>
            par
            <strong>Admin</strong>
            <time title="10 juin 2010">il y a 10 ans</time>
          </li>
        </ul>

        <section className="BoardPost if-expanded">
          <h3>Démarrer un nouveau fil de discussion</h3>
          <form>
            <input type="text" placeholder="Le sujet de votre message" />
            <textarea
              rows={10}
              placeholder="Le texte de votre message (TODO autoriser le Markdown ?)"
            ></textarea>
            <button type="submit">Démarrer la discussion</button>
          </form>
        </section>
      </section>
    );
  }
}

export default Board;
