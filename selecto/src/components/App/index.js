import React, { Component } from 'react'
import {getPosts} from '../../config/config';
import Posts from '../Posts';
import * as S from '../../assets/styles/shared-components';

export default class App extends Component {
    state = {
        posts: [],
        users: []
    }

    goToPost = (postId) => {
        this.props.history.push(`/post/${postId}`);
    }

    goToUser = (userId) => {
        this.props.history.push(`/user/${userId}`);
    }

    componentDidMount(){
       getPosts().then(result => {
           this.setState({
               posts: result.data
           })
       })
    }

    render() {
        return (
            <S.App>
                <S.GlobalStyle/>
                <Posts posts={this.state.posts} goToPost={this.goToPost} goToUser={this.goToUser}/>
            </S.App>
        )
    }
}
