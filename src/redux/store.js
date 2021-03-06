// import { createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from 'redux-logger'
import {
    // persistStore,
    // persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import reducer from "./reduser";

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }), logger,
];


// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// const store = createStore(reduser, composeWithDevTools());
const store = configureStore({
    reducer: {
        contacts: reducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development'
});

// const persistor = persistStore(store);

export default  store;
