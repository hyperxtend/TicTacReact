import React from 'react';
import PropTypes from 'prop-types';

import './component.css';

const PageHeader = ({ pageTitle }) => (
  <h1 className="page-title" data-qa="page-title">
    {pageTitle}
  </h1>
);

PageHeader.propTypes = {
  pageTitle: PropTypes.string,
};

PageHeader.defaultProps = {
  pageTitle: '',
};

export default PageHeader;
