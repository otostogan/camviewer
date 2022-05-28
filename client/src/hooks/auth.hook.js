import {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {auth, logData} from '../redux/actions';

const storageName = 'userData';

export const useAuth = () => {
    const dispatch = useDispatch();
    const {token, userId} = useSelector(state => state.auth);
    const isAuth = !!token;

    const login = useCallback((token, userId, admin) => {
        dispatch(auth({token, userId, admin}));

        localStorage.setItem(storageName, JSON.stringify({
            userId, token, admin
        }))

    }, []);

    const logout = useCallback(() => {
        dispatch(auth({token: null, userId: null, admin: null, isAuthenticated: false}));
        localStorage.removeItem(storageName);
        localStorage.removeItem('userDataLogin');
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName));
        const LogIn = JSON.parse(localStorage.getItem('userDataLogin'));

        if(data && data.token){

            dispatch(logData(LogIn.email, 'email'));
            dispatch(logData(LogIn.password, 'password'));

            login(data.token, data.userId, data.admin);
        }

    }, [login])

    return {
        login,
        logout,
        isAuth,
        token,
        userId
    }
}