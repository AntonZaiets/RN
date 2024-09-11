import { configureStore } from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HIDE_SPLASH':
            return {
                ...state,
                isLoading: false,
            };
        default:
            return state;
    }
};

const store = configureStore({
    reducer,
});

export default store;
