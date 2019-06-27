import React from 'react';

const SinglePost = ({post, index}) => {
    const {body, title, userId} = post;
    return(
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <p>User ID: {userId}</p>
        </div>
    )
}

export default SinglePost;