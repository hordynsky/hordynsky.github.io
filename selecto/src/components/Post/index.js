import React from 'react';
import * as S from '../../assets/styles/shared-components';

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