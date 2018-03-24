import { createStore, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'

// For rehydrating the store from async storage
const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: hardSet,
}


export const AppReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_USER_SUCCESS':
      console.log('reducer hit')
        return {
        ...state,
        token: action.token
       };
    default:
      return state;
    }
}

const persistedReducer = persistReducer(persistConfig, AppReducer)

export const store = createStore(persistedReducer);

export const  persistor = persistStore(store)
