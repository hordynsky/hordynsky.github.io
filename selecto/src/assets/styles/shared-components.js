import styled, {createGlobalStyle} from 'styled-components';

//font-family: 'Montserrat', sans-serif;
//font-family: 'Lato', sans-serif;

/* Global Styles */

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 10px;

        @media only screen and (max-width: 75em){ /* 1200px */
            font-size: 9px;
        }

        @media only screen and (max-width: 62.5em){ /* 1000px */
            font-size: 8px;
        }

        @media only screen and (max-width: 50em){ /* 800px */
            font-size: 7px;
        }

        @media only screen and (min-width: 100em){ /* 1600px */
            font-size: 12px;
        }
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    h1{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 3.8rem;
        margin-bottom: 1rem;
    }

    h2{
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        font-size: 2.2rem;
        line-height: 3rem;
        color: #DC3D24;
    }

    p, li{
        font-family: 'Lato', sans-serif;
        font-size: 1.6rem;
        line-height: 2rem;
        color: #232B2B;
    }

    a{
        color: #9068be;
        text-decoration: none;
    }

    span{
        color: #232B2B;
        font-size: 1.4rem;
        font-family: 'Lato', sans-serif;
        line-height: 1.8rem;
    }

    li {
        list-style: none;

        span{
            font-size: 1.8rem;
            font-weight: 500;
        }
    }
`;

export const Button = styled.button`
    background: black;
    border-radius: .5rem;
    color: white;
    display: flex;
    margin: 0 auto;
    outline: none;
    transition: all .2s;
    font-size: 1.6rem;
    padding: .5rem;

    &:hover{
        opacity: .7;
        cursor: pointer;
    }
`

/* App */

export const App = styled.div`
    width: 100%;
    margin: 1rem;
    display: flex;
    flex-direction: column;
`;

/* Posts */

export const Posts = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 1rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    width: 100%;

    @media only screen and (max-width: 56.25em){ /* 900px */
        flex-direction: column;
    }
`;

/* Post */

export const Post = styled.div`
    flex: 1 0 33%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    margin: 1rem;
    padding: 1rem;

    @media only screen and (max-width: 56.25em){ /* 900px */ 
        flex: 1;
    }
`;

export const PostIds = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const PostId = styled.span`
    display: inline-flex;
    margin-top: 1rem;

    &:hover{
        cursor: pointer;
    }
`;

/* SinglePost */

export const SinglePost = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    margin: 3rem auto 0;
    padding: 1rem 3rem; 

    @media only screen and (max-width: 62.5em){ /* 1000px */
        width: 80%;
    }

    @media only screen and (max-width: 37.5em){ /* 600px */
        width: 95%;
        margin-top: 1rem;
    }
`;

export const SinglePostDescription = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px dashed #091f36;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    text-align: center;

    p{
        color:  rgba(0, 0, 0, .8);
        font-size: 2rem;
        line-height: 2.6rem;
        letter-spacing: .8px;
    }
`;

/* Comments */

export const Comments = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;

    h2{
        color: #76c1d4;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 1.2px;
    }
`;

export const Comment = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    padding: 1rem;
    
    &:not(:last-child){
        margin-bottom: 1rem;
    }

    p{
        margin-bottom: .5rem;
    }
`;

export const CommentCredentials = styled.div`
    align-self: flex-end;
    font-size: 1.2rem;
    font-family: 'Montserrat', sans-serif;
`;

/* SingleUser */

export const User = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
    margin: 3rem auto 0;
    padding: 2rem 3rem; 

    h1{
        text-align: center;
        margin-bottom: 2rem;
    }

    @media only screen and (max-width: 62.5em){ /* 1000px */
        width: 80%;
    }

    @media only screen and (max-width: 37.5em){ /* 600px */
        width: 95%;
        margin-top: 1rem;
    }
`;

export const UserDetails = styled.div`
    display: flex;
    padding-bottom: 2rem;
    margin-bottom: 1rem;
    border-bottom: 1px dashed #091f36;
`;

export const UserImage = styled.figure`
    flex: 1 1 30%;
    shape-outside: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
    margin-right: 2rem;

    img{
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const UserInformation = styled.ul`
    display: flex;
    flex-direction: column;
    flex: 1 1 70%;
    justify-content: center;

    li:not(:last-child){
        margin-bottom: 1rem;
    }
`;

export const UserAddress = styled.div`
    display: flex;
    width: 100%;
    height: 500px;
    position: relative;
`;
