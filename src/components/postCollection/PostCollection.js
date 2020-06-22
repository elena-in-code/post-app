import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../store/actions';
import Post from '../post/Post';
import Title from '../title/Title';
import './styles.scss';

const PostCollection = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <>
      <Title level="secondary" titleContent="Posts Wall" />

      <section className="post-collection">
        {posts.map((post) => (
          <Post
            key={post.id}
            title={post.title}
            user={post.userId}
            body={post.body}
          />
        ))}
      </section>
    </>
  );
};

PostCollection.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape({
      body: PropTypes.string,
      id: PropTypes.number,
      title: PropTypes.string,
      userId: PropTypes.number,
    })
  ).isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  posts: state.posts.items,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: (posts) => {
    dispatch(fetchPosts({ posts }));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostCollection);
