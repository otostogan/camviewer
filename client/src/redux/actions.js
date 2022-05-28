export const logData = (e, type) => ({type: 'LOGINDATA', payload: {type, value: e}});
export const alert = (value) => (
    {type: 'ALERTMODAL', payload: {open: value.open, text: value.message}}
);
export const auth = (value) => (
    {type: 'AUTH', payload: {isAuthenticated: value.isAuthenticated, token: value.token, userId: value.userId, admin: value.admin}}
);
