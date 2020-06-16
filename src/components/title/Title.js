import React from 'react';
import PropTypes from 'prop-types';
import './title.scss';

const headingLevel = {
  primary: 'h1',
  secondary: 'h2',
  tertiary: 'h3',
};

const Title = (props) => {
  const { level, titleContent } = props;
  const TitleTag = headingLevel[level];
  return <TitleTag className="title">{titleContent}</TitleTag>;
};

Title.propTypes = {
  level: PropTypes.string,
  titleContent: PropTypes.string,
};

Title.defaultProps = {
  level: 'primary',
  titleContent: 'This is a Title',
};

export default Title;
