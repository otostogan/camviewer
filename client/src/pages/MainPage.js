import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

const MainPage = () =>{

    const {email, auth} = useSelector(state => state);

    return (
        <div>
            <h1>Hello {email} is admin({auth.admin.toString()})</h1>
        </div>
    );
}

export default MainPage;