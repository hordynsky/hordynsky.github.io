import React from 'react';
import ResetPage from '../components/Reset';

const Reset = props => {

    return (
        <div>
           <p>Reset your password {props.query.resetToken}</p> 
            <ResetPage resetToken={props.query.resetToken}/>
        </div>
    );

};

export default Reset;