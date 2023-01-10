const initialState = {
    productList: [],
    email: '',
    passsword: '',
    authenticate: false,
    product : null
};

const contactReducer = (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case "LOGIN":
            state.email = payload.email;
            state.passsword = payload.passsword;
            state.authenticate = true;
            console.log('contactReducer -> LOGIN');
            break;

        case "LOGOUT":
            state.email = '';
            state.passsword = '';
            state.authenticate = false;
            break;
        case "GET_PRODUCT_SUCCES":
            return {...state, productList:payload.data}
            break;
        case  "SELECT_PRODUCT" :
             state.product = payload.product;
             break;

    }

    return { ...state };
};



export default contactReducer
