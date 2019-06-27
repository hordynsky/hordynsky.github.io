import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Router';

ReactDOM.render(<Router />, document.getElementById('root'));


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