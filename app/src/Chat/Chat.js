import React from 'react';
import './Chat.scss';
import { bool } from 'prop-types';
import cx from 'classnames';
import CollapsableSection from '../CollapsableSection/CollapsableSection';

class Chat extends React.Component {
  render() {
    return (
      <CollapsableSection className="Chat" title="Chat">
        <section className="ChatPost if-expanded">
          <h3>Poster un commentaire</h3>
          <form>
            <input type="text" placeholder="Votre message" autoFocus />
            <button type="submit">Envoyer votre message</button>
          </form>
        </section>

        <p>
          <span className="count">6</span> messages
        </p>
        <ul className="if-expanded">
          <li>
            <div className="info">
              <strong title="Lorem ipsum">Lorem ipsum</strong>
              <time title="12 mai 2020 09:53">il y a quelques instants</time>
            </div>
            <p>
              dolor sit amet, consectetur adipiscing elit. Fusce eu nunc
              fringilla, interdum ante ac, ultricies magna. Nulla facilisi.
              Nullam ac urna laoreet, blandit tellus ac
            </p>
          </li>
          <li>
            <div className="info">
              <strong title="porta ex">porta ex</strong>
              <time title="12 mai 2020 09:53">il y a quelques instants</time>
            </div>
            <p>
              Nam pretium rutrum sem, a auctor nisi interdum rhoncus. Ut a
              tincidunt nunc. Fusce sit amet tellus a massa malesuada
            </p>
          </li>
          <li>
            <div className="info">
              <strong title="pulvinar nec non est">pulvinar nec non est</strong>
              <time title="12 mai 2020 09:53">il y a quelques instants</time>
            </div>
            <p>
              Donec volutpat ante at mauris volutpat, at condimentum magna
              pharetra. Pellentesque tempor diam a tincidunt porttitor.
            </p>
          </li>
          <li>
            <div className="info">
              <strong title="Suspendisse">Suspendisse</strong>
              <time title="12 mai 2020 09:53">il y a quelques instants</time>
            </div>
            <p>
              porttitor sapien et eros ornare ornare. Maecenas at leo vitae est
              blandit suscipit non sed velit. Fusce quis neque ante.
            </p>
          </li>
          <li>
            <div className="info">
              <strong title="Nullam pretium">Nullam pretium</strong>
              <time title="12 mai 2020 09:53">il y a quelques instants</time>
            </div>
            <p>
              felis et egestas finibus. Nullam sed augue quis orci porta dictum
              id ac massa. Nunc rutrum pharetra tempus. Proin ac massa ac magna
              viverra vehicula id in ex. Suspendisse id sagittis turpis. Nulla
              sit amet vehicula quam. Cras quis tellus purus. Aenean sodales dui
              et lectus aliquet egestas.
            </p>
          </li>
          <li>
            <div className="info">
              <strong title="Proin id lobortis">Proin id lobortis</strong>
              <time title="12 mai 2020 09:53">il y a quelques instants</time>
            </div>
            <p>enim. Nullam non vulputate dolor.</p>
          </li>
        </ul>
      </CollapsableSection>
    );
  }
}

export default Chat;
