import React from 'react';
import Post from '../Post';
import * as S from '../../assets/styles/shared-components'

const Posts = ({posts, goToPost, goToUser}) => {
    return(
       <S.Posts>
            {posts.map(post => <Post post={post} key={post.id} index={post.id} goToPost={goToPost} goToUser={goToUser}/>)}
       </S.Posts>
    )
}

export default Posts;