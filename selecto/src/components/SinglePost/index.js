import React from 'react';
import axios from 'axios';
import * as S from '../../assets/styles/shared-components';
import { DATA_URLS } from '../../config/config';
import PropTypes from 'prop-types';

class SinglePost extends React.Component {

    state = {
        postId: 0,
        post: [],
        comments: []
    }

    getPost = async postId => {
        try {
            const results = await axios.get(`${DATA_URLS.POST(postId)}`);
            const post = results.data;

            this.setState({
                post
            })
            
        } catch (error) {
            console.error(error);
        }
    }
    
    getComments = async postId => {
        try {
            const results = await axios.get(`${DATA_URLS.COMMENTS(postId)}`);
            const comments = results.data;
            const separatedComments = this.filterComments(comments);

            this.setState({
                comments: separatedComments
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    filterComments = comments => comments.filter(comment => comment.postId === this.state.postId);
    
    componentDidMount(){  
        const postId = this.props.match.params.postId;
        this.props.match && this.setState({postId: parseInt(postId)});

        this.getPost(postId);
        this.getComments(postId);
    }
    
    render(){
        const {match, history} = this.props;
        const {title, body} = this.state.post;

        return(
            <S.SinglePost>
                <S.GlobalStyle/>
                 <S.SinglePostDescription>
                    <h1>{title}</h1>
                    <p>{body}</p>
                 </S.SinglePostDescription>
                <S.Comments>
                    <h2 style={{marginBottom: '1rem'}}>Comments: </h2>
                    {
                        this.state.comments.map(comment => <S.Comment key={comment.id}>
                            <p>{comment.body}</p>
                            <S.CommentCredentials>
                               Email: <a href={`mailto:${comment.email}`}>{comment.email}</a>
                            </S.CommentCredentials>
                        </S.Comment>)
                    }
                </S.Comments>
                <S.Button onClick={() => history.goBack()} style={{position: 'absolute',  bottom: '2rem', left: '1rem'}}>Return back</S.Button>
            </S.SinglePost>
        )
    }
}

export default SinglePost;

SinglePost.propTypes = {
    location: PropTypes.object,
    history: PropTypes.object,
    match: PropTypes.shape({
        params: PropTypes.shape({
            postId: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ])
        })
    })
}
