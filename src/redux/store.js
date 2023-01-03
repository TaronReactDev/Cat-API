import {legacy_createStore as createStore} from 'redux';


const store = createStore(function (state, action) {

        switch (action.type) {
            case 'SET_CATEGORIES':
                return {
                    ...state,

                    categories: action.payload.categories

                }

            case 'SET_CATS':
                return {
                    ...state,
                    cats: [...state.cats, ...action.payload.cats],

                }
            case 'SET_LIMIT':
                return {
                    ...state,
                    limit: action.payload.limit,

                }
            case 'SET_CATEGORIES_ID':
                return {
                    ...state,
                    cats: action.payload.cats,
                    category_id: action.payload.category_id,
                    limit: action.payload.limit,
                }

            case 'SET_MIXED':
                return {
                    ...state,
                    category_id: action.payload.category_id,

                }

            default:
                return state
        }
    }, {
        categories: [],
        cats: [],
        limit: 10,
        category_id: "none",
    }
);

export default store;