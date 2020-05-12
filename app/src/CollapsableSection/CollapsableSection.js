import React from 'react';
import { string, node, bool } from 'prop-types';
import './CollapsableSection.scss';
import cx from 'classnames';

// Wrapper
class CollapsableSection extends React.Component {
  static propTypes = {
    className: string,
    title: string.isRequired,
    children: node.isRequired,
    initialCollapsed: bool,
  };

  static defaultProps = {
    initialCollapsed: false,
  };

  state = {
    collapsed: this.props.initialCollapsed,
  };

  toggleCollapse = (e) => {
    e.preventDefault();
    this.setState((state) => {
      return { collapsed: !state.collapsed };
    });
  };

  render() {
    return (
      <section
        className={cx(this.props.className, 'CollapsableSection', {
          collapsed: this.state.collapsed,
        })}
      >
        <h2>
          {this.props.title}
          <button onClick={this.toggleCollapse}>
            {this.state.collapsed ? '+' : '-'}
          </button>
        </h2>
        {this.props.children}
      </section>
    );
  }
}

export default CollapsableSection;
