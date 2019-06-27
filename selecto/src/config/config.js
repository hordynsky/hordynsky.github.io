import axios from 'axios';

export const DATA_URLS = {
    POSTS: 'https://jsonplaceholder.typicode.com/posts',
    POST: postId => `https://jsonplaceholder.typicode.com/posts/${postId}`,
    USERS: 'https://jsonplaceholder.typicode.com/users',
    USER: userId => `https://jsonplaceholder.typicode.com/users/${userId}`,
    COMMENTS: userId => `https://jsonplaceholder.typicode.com/posts/${userId}/comments`
}

export const getPosts = async () => {
    try {
        return await axios.get(`${DATA_URLS.POSTS}`);
      } catch (error) {
        console.error(error);
    }
}
