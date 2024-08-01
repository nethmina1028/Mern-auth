import {combineReducers, configureStore} from '@reduxjs/toolkit';   //1
import userReducer from './user/userSlice';       //2
import {persistReducer, persistStore} from 'redux-persist';  //5
import storage from 'redux-persist/lib/storage';  //6

         const rootReducer = combineReducers({user:userReducer});  //4

         const persistConfig = {   //6
          key: 'root',
          version:1,
          storage,
         }

   const persistedReducer = persistReducer(persistConfig, rootReducer);  //7


     export const store = configureStore({      //3
                /*reducer:{user:userReducer}, */
             reducer: persistedReducer,
             middleware: (getDefaultMiddleware) => getDefaultMiddleware({
             serializableCheck: false,
             }),
     });


export const persistor = persistStore(store);  //8
  