import {CHANGELOGININPUT, FETCH_FORM_REQUEST, FETCH_FORM_SUCCESS,CHANGEFILE,CHANGETEXT,
    FETCH_COTEGORY_SUCCESS, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_POST_SUCCESS,CHANGECATEGORY, CHOOSEITEM, BACK} from './actions'

const initialState = {
    login:{},
    user:{},
    isLoading:false,
    products: null,
    title: '',
    description: '',
    price: 0,
    image: '',
    category: '',
    categories: [],
    productdata:{},
    currentcategory: "",
    choose: ""
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case CHANGELOGININPUT:
            let mystate;
            mystate = {...state};
            mystate.login[action.event.target.name] = action.event.target.value;
            return mystate;
        case CHANGECATEGORY:
            return {...state, currentcategory:action.event.target.value};
        case CHANGEFILE:
            return {...state, [action.event.target.name]:action.event.target.files[0]};
        case CHANGETEXT:
            return {...state, [action.event.target.name]:action.event.target.value};
        case FETCH_FORM_SUCCESS:
            return {...state, user: action.data};
        case FETCH_COTEGORY_SUCCESS:
            return {...state, categories: action.data};
        case FETCH_FORM_REQUEST:
            return {...state};
        case CHOOSEITEM:
            return {...state , choose: action.event.currentTarget.id};
        case FETCH_PRODUCT_POST_SUCCESS:
            return {...state, products:action.data};
        case BACK:
            return {...state, choose:""};
        case FETCH_PRODUCT_SUCCESS:
            let my1state;
            my1state = {...state};
            my1state.productdata = action.data;
            return my1state;
        default:
            return state
    }
};

export default reducer;