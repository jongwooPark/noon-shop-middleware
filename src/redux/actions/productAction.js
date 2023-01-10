
function getProducts(searchQuery){

    return async(dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/jongwooPark/noon-shop/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data =  await response.json();
       
        dispatch({type:"GET_PRODUCT_SUCCES", payload:{ data}});
    }
}

function login(email,password){

    return async(dispatch, getState)=>{

        dispatch({ type: "LOGIN", payload: { email : email, passsword:  password} });
    }
}

function getProductDetail(id){

    return async(dispatch, getState)=>{
        //dispatch({type:"SELECT_PRODUCT", payload: null});
        let url = `https://my-json-server.typicode.com/jongwooPark/noon-shop/products/${id}`;
        let respose = await fetch(url);
        let product = await respose.json();
        console.log("미들웨어 중간 url = ", url);
        dispatch({type:"SELECT_PRODUCT", payload:{ product}});
    }
}

export const productAction={getProducts, login, getProductDetail} ;
