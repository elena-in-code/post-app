import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = (props) => {
  const { type, handleClick, label } = props;
  const className = `button ${type}`;

  return (
    <button className={className} onClick={handleClick} type="button">
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  handleClick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  type: 'contained',
  handleClick: () => {},
  label: 'I am a button',
};

export default Button;
