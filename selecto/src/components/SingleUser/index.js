import React from 'react';
import axios from 'axios';
import {DATA_URLS} from '../../config/config';
import * as S from '../../assets/styles/shared-components';

class SingleUser extends React.Component {

    state = {
        userId: 0,
        user: []
    }

    getUser = async userId => {
        try {
            const results = await axios.get(`${DATA_URLS.USER(userId)}`);
            const user = results.data;

            console.log(results);
            this.setState({
                user
            })
            
        } catch (error) {
            console.error(error);
        }
    }

    componentDidMount(){
        const userId = parseInt(this.props.match.params.userId);
        userId && this.setState({userId});

        this.getUser(userId);
    }

    render(){
        const {match,history} = this.props;
        return(
            <S.Post>
                <S.GlobalStyle/>
                <S.Button onClick={() => history.goBack()} style={{position: 'absolute',  bottom: '2rem', left: '1rem'}}>Return back</S.Button>
                <h2>Hello from user: {match.params.userId}</h2>
            </S.Post>
        )
    }
}

export default SingleUser;

/*
    https://jsonplaceholder.typicode.com/posts
    https://jsonplaceholder.typicode.com/posts/{postId}
    https://jsonplaceholder.typicode.com/users
    https://jsonplaceholder.typicode.com/users/{userId}
    https://jsonplaceholder.typicode.com/posts/{postId}/comments
    Вивести список постів, Кожен пост має мати посилання на сторінку окремого поста та
    посилання на сторінку користувача. На сторінці користувача вивести інформацію про
    нього. На сторінці окремого поста вивести інформацію про пост і коментарі до поста.
    Для UI можеш вибрати будь яку бібліотеку наприклад bootstrap, materialize :)
    Стек технологій: React + redux
*/ 