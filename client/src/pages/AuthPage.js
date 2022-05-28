import React, {useEffect, useContext} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHttp} from '../hooks/http.hook';

import {AuthContext} from '../context/AuthContext';
import {logData, alert} from '../redux/actions';

import {AlertModal} from '../components/alertModal/AlertModal';
import {Content, FlexboxGrid, Panel, Form, ButtonToolbar, Button, Footer} from 'rsuite';

const storageName = 'userDataLogin';

const AuthPage = () =>{

    const auth = useContext(AuthContext);

    const {email, password} = useSelector(state => state);
    const {loading, error, request} = useHttp();

    const dispatch = useDispatch();
    const handleChange = (e, type) => dispatch(logData(e, type));

    const registerHandler = async () => {
        try{
            
            const data = await request('/api/auth/register', 'POST', {email, password});

            dispatch(alert({open: true, message: data.message}));
            
        }catch(e){
            dispatch(alert({open: true, message:e.message}));
        }
    }
    const LoginHandler = async () => {
        try{
            const data = await request('/api/auth/login', 'POST', {email, password});

            localStorage.setItem(storageName, JSON.stringify({
                email, password
            }))

            auth.login(data.token, data.userId, data.admin);

        }catch(e){
            dispatch(alert({open: true, message:e.message}));
        }
    }

    useEffect(()=>{
        dispatch(logData('', 'email'));
        dispatch(logData('', 'password'));
    }, [error])

    return (
        <Content className="log-in">
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={12}>
                        <Panel header={<h3>Login</h3>} bordered>
                            <Form fluid>
                                <Form.Group>
                                    <Form.ControlLabel htmlFor="email">Username or email address</Form.ControlLabel>
                                    <Form.Control 
                                        id="email" 
                                        type="text" 
                                        name="email" 
                                        value={email}
                                        onChange={(e) => handleChange(e, 'email')}
                                            />
                                </Form.Group>
                                <Form.Group>
                                    <Form.ControlLabel>Password</Form.ControlLabel>
                                    <Form.Control 
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="off" 
                                        value={password}
                                        onChange={(e) => handleChange(e, 'password')}
                                            />
                                </Form.Group>
                                <Form.Group>
                                    <ButtonToolbar>
                                        <Button 
                                            appearance="default"
                                            onClick={LoginHandler}
                                            >Sign in</Button>
                                        <Button 
                                            appearance="primary"
                                            disabled={loading}
                                            onClick={registerHandler}
                                            >Sign up</Button>
                                        <Button appearance="link">Forgot password?</Button>
                                    </ButtonToolbar>
                                </Form.Group>
                            </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
                <Footer>
				    <AlertModal/>
			    </Footer>
        </Content>
    );
}

export default AuthPage;