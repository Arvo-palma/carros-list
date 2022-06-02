// vitals
import React from 'react';
import PropTypes from 'prop-types';

// styles
import PageTitleStyled from './styles';

function PageTitle(props) {
  const { title } = props;
  return (
    <PageTitleStyled >
      <p className="page-title">{title}</p>
    </PageTitleStyled>
  );
}

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageTitle;
