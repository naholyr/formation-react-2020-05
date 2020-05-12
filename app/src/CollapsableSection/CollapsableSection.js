import React from 'react';
import { bool, string, node } from 'prop-types';
import './CollapsableSection.scss';
import cx from 'classnames';

const collapsed = false; // TODO should be a state

// Wrapper
class CollapsableSection extends React.Component {
  static propTypes = {
    className: string,
    title: string.isRequired,
    children: node.isRequired,
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    // TODO toggle collapsed
  };

  render() {
    return (
      <section
        className={cx(this.props.className, 'CollapsableSection', {
          collapsed,
        })}
      >
        <h2>
          {this.props.title}
          <button onClick={this.toggleCollapse}>{collapsed ? '+' : '-'}</button>
        </h2>
        {this.props.children}
      </section>
    );
  }
}

export default CollapsableSection;
