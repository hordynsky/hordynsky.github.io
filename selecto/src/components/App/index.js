import React, { Component } from 'react'
import {getPosts} from '../../config/config';
import Posts from '../Posts';
import * as S from '../../assets/styles/shared-components';
import PropTypes from 'prop-types';

export default class App extends Component {
    state = {
        posts: []
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

App.propTypes = {
    location: PropTypes.object,
    match: PropTypes.object,
    history: PropTypes.object
}