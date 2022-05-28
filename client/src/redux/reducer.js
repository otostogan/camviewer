const initialState = {
    email: '',
    password: '',
    auth: {
        token: null,
        userId: null, 
        isAuthenticated: false,
        admin: false
    },
    alertModal: {
        open: false,
        text: ''
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGINDATA":
            return {
                ...state,
                [action.payload.type]: action.payload.value
            };
        case "AUTH":
            return {
                ...state,
                auth: {
                    admin: action.payload.admin,
                    token: action.payload.token,
                    userId: action.payload.userId,
                    isAuthenticated: action.payload.token ? true : false
                }
            }
        case "ALERTMODAL":
            return {
                ...state,
                alertModal: {
                    open: action.payload.open,
                    text: action.payload.text
                }
            }
        default:
            return state;
    }
}

export default reducer;