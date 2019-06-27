import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from '../App';
import SinglePost from '../SinglePost';
import SingleUser from '../SingleUser';
import NotFound from '../NotFound';


const Router = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App}/>
                <Route exact path="/post/:postId" component={SinglePost}/>
                <Route exact path="/user/:userId" component={SingleUser}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;