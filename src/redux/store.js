import {configureStore} from '@reduxjs/toolkit'
import cartReducer from './cartReducer'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// const stripe = require('stripe')('sk_test_51MwOAcSAdCqW9dSkXJeRSHkCRzuBeH0yx4W4xeqrg1MpvAxd9qGqfPK2rtJiB5Drt9YOL1aTJTibwRLw9ZIiyKki00XQKeOHqh');
const persistConfig = {
    key:'root',
    version:1,
    storage
}

const persistedReducer = persistReducer(persistConfig,cartReducer)

export const store = configureStore({
    reducer: {
        cart:persistedReducer
    },
    middleware : (getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:{
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PURGE, PERSIST, REGISTER],
            }
        })
    
})

export let persistor = persistStore(store);