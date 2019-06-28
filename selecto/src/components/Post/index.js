import React from 'react';
import * as S from '../../assets/styles/shared-components';
import PropTypes from 'prop-types';

const Post = ({post, index, goToPost, goToUser}) => {
    const {body, title, userId} = post;
    return(
        <S.Post>
            <h2>{title}</h2>
            <p>{body}</p>
            <S.PostIds>
                <S.PostId style={{color: '#0288AD'}} onClick={() => goToPost(index)}>PostId: {index}</S.PostId>
                <S.PostId onClick={() => goToUser(userId)}>AuthorId: {userId}</S.PostId>
            </S.PostIds>
        </S.Post>
    )
}

export default Post;

Post.propTypes = {
    goToPost: PropTypes.func.isRequired,
    goToUser: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    post: PropTypes.shape({
        body: PropTypes.string,
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        userId: PropTypes.number.isRequired
    })
}