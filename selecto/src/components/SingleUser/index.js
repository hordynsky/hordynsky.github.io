import React from 'react';

const SingleUser = ({match}) => {
    return(
        <div>SingleUser id: {match.params.userId}</div>
    )
}
    
export default SingleUser;