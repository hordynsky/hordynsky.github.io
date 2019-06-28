import React from 'react';
import Post from '../Post';
import * as S from '../../assets/styles/shared-components';
import PropTypes from 'prop-types';

const Posts = ({posts, goToPost, goToUser}) => {
    return(
       <S.Posts>
            {posts.map(post => <Post post={post} key={post.id} index={post.id} goToPost={goToPost} goToUser={goToUser}/>)}
       </S.Posts>
    )
}

export default Posts;


Posts.propTypes = {
    goToPost: PropTypes.func.isRequired,
    goToUser: PropTypes.func.isRequired,
    posts: PropTypes.arrayOf(PropTypes.shape({
        body: PropTypes.string,
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        userId: PropTypes.number.isRequired
    }))
}
