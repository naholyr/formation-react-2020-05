import React from 'react';
import { string, node, bool } from 'prop-types';
import './CollapsableSection.scss';
import cx from 'classnames';

// Wrapper
const CollapsableSection = ({
  className,
  title,
  children,
  initialCollapsed = false,
}) => {
  const [collapsed, setCollapsed] = React.useState(initialCollapsed);

  const toggleCollapse = React.useCallback((e) => {
    e.preventDefault();
    setCollapsed((collapsed) => !collapsed);
  }, []);

  return (
    <section className={cx(className, 'CollapsableSection', { collapsed })}>
      <h2>
        {title}
        <button onClick={toggleCollapse}>{collapsed ? '+' : '-'}</button>
      </h2>
      {children}
    </section>
  );
};

CollapsableSection.propTypes = {
  className: string,
  title: string.isRequired,
  children: node.isRequired,
  initialCollapsed: bool,
};

export default CollapsableSection;
