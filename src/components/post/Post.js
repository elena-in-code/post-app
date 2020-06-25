import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/Title';
import Button from '../button/Button';
import './styles.scss';

const Post = (props) => {
  const { title, user, body, handleClick } = props;
  return (
    <article className="post__wrapper">
      <Title level="tertiary" titleContent={title} />
      <p>{body}</p>
      {/* <Button type="text" handleClick={handleClick} label={`User:${user}`} /> */}
      <Button
        type="contained"
        handleClick={handleClick}
        label={`Get all post by user ${user}`}
      />
    </article>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  user: PropTypes.number,
  body: PropTypes.string,
  handleClick: PropTypes.func,
};

Post.defaultProps = {
  title: 'Post title',
  user: 1,
  body: 'This is the very interesting post content',
  handleClick: () => {},
};

export default Post;
