import React, { Component } from 'react'
import {getPosts} from '../../config/config';
import Posts from '../Posts';

export default class App extends Component {
    state = {
        posts: [],
        users: []
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
            <div>
                <Posts posts={this.state.posts}/>
            </div>
        )
    }
}
