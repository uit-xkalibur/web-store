import { PRODUCT_SEARCH, PRODUCT_CATEGORIES } from '../actions/productActions';

const INITIAL_STATE = {
    search: "",
    category: "",
    products: [],
    categories: [],
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PRODUCT_SEARCH:
            return {
                ...state,
                search: action.payload.search,
                category: action.payload.category,
                products: action.payload.products,
            };

        case PRODUCT_CATEGORIES:
            return {
                ...state,
                categories: action.payload,
            };

        default:
            return state;
    }
}