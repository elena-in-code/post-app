import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../../store/actions';
import Post from '../post/Post';

const PostCollection = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section>
      {posts.map((post) => (
        <Post
          key={post.id}
          title={post.title}
          user={post.user}
          body={post.body}
        />
      ))}
    </section>
  );
};

PostCollection.propTypes = {
  posts: PropTypes.arrayOf.isRequired,
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
