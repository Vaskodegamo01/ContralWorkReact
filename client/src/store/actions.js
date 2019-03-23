import axios from '../axios-shop';

export const BACK = 'BACK';
export const CHOOSEITEM = 'CHOOSEITEM';
export const CHANGECATEGORY = 'CHANGECATEGORY';
export const CHANGELOGININPUT = 'CHANGELOGININPUT';
export const CHANGETEXT = 'CHANGETEXT';
export const CHANGEFILE = 'CHANGEFILE';

export const FETCH_FORM_REQUEST = 'FETCH_FORM_REQUEST';
export const FETCH_FORM_SUCCESS = 'FETCH_FORM_SUCCESS';
export const FETCH_FORM_ERROR = 'FETCH_FORM_ERROR';

export const fetchSendFormRequest = () => {
    return { type: FETCH_FORM_REQUEST };
};

export const fetchSendFormSuccess = (data) => {
    return { type: FETCH_FORM_SUCCESS, data};
};

export const fetchSendFormError = (error) => {
    return { type: FETCH_FORM_ERROR, error};
};


export const FETCH_COTEGORY_REQUEST = 'FETCH_COTEGORY_REQUEST';
export const FETCH_COTEGORY_SUCCESS = 'FETCH_COTEGORY_SUCCESS';

export const fetchCategotyRequest = () => {
    return { type: FETCH_COTEGORY_REQUEST };
};

export const fetchCategotySuccess = (data) => {
    return { type: FETCH_COTEGORY_SUCCESS, data};
};

export const fetchCategotyError = (error) => {
    return { type: FETCH_FORM_ERROR, error};
};


export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_ERROR = 'FETCH_PRODUCT_ERROR';

export const fetchPruductFormRequest = () => {
    return { type: FETCH_PRODUCT_REQUEST };
};

export const fetchPruductFormSuccess = (data) => {
    return { type: FETCH_PRODUCT_SUCCESS, data};
};

export const fetchPruductFormError = (error) => {
    return { type: FETCH_PRODUCT_ERROR, error};
};

export const FETCH_PRODUCT_POST_SUCCESS = 'FETCH_PRODUCT_POST_SUCCESS';

export const fetchPruducSuccess = (data) => {
    return { type: FETCH_PRODUCT_POST_SUCCESS, data};
};

export const fetchSendForm = (e,url,data, history) => {
    e.preventDefault();
    return dispatch => {
        dispatch(fetchSendFormRequest());
        axios.post(url, data).then((response) => {
            dispatch(fetchSendFormSuccess(response.data));
            history.push('/')
        },error => {dispatch(fetchSendFormError(error));
        });
    }};

export const fetchCategoty = () => {
    return dispatch => {
        dispatch(fetchCategotyRequest());
        axios.get("categories").then((response) => {dispatch(fetchCategotySuccess(response.data))},error => {dispatch(fetchCategotyError(error));
        });
    }};


export const fetchLogout = (e,url,token) => {
    e.preventDefault();
    return dispatch => {
        let headers = {"Token": token};
        axios.delete(url,{headers}).then((response) => {dispatch(fetchSendFormSuccess(response.data))},error => {dispatch(fetchSendFormError(error));
        });
    }};

export const fetchSendProductForm = (e,url,data,token,history) => {
    e.preventDefault();
    return dispatch => {
        let headers = {"Token": token};
        dispatch(fetchPruductFormRequest());
        axios.post(url, data, {headers}).then((response) => {
            dispatch(fetchPruductFormSuccess(response.data));
            history.push('/')
        },error => {dispatch(fetchPruductFormError(error));
        });
    }};

export const fetchProduct = (url) => {
    return dispatch => {
        axios.get(url).then((response) => {dispatch(fetchPruducSuccess(response.data))
        },error => {dispatch(fetchSendFormError(error));
        });
    }};


export const loginChangeImput = (event) => {
    return { type: CHANGELOGININPUT,event};
};

export const productinputchangetext = (event) => {
    return { type: CHANGETEXT,event};
};

export const productinputchangefile = (event) => {
    return { type: CHANGEFILE,event};
};

export const changecategory = (event) => {
    return { type: CHANGECATEGORY,event};
};

export const chooseitem = (event) => {
    return { type: CHOOSEITEM,event};
};

export const fetchback = () => {
    return { type: BACK};
};


export const fetchdeleteitem = (e,token) => {
    return dispatch => {
        let headers = {"Token": token};
        axios.delete(`products/${e.currentTarget.id}`,{headers}).then(() => {
            dispatch(fetchback())
        }).then(()=> dispatch(fetchProduct("products")))
    }};


