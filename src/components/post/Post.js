import React from 'react';
import PropTypes from 'prop-types';
import Title from '../title/Title';

const Post = (props) => {
  const { title, user, body } = props;
  return (
    <article className="post__wrapper">
      <Title level="tertiary" titleContent={title} />
      <p>{user}</p>
      <p>{body}</p>
    </article>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  body: PropTypes.string,
};

Post.defaultProps = {
  title: 'Post title',
  user: '1111',
  body: 'This is the very interesting post content',
};

export default Post;
