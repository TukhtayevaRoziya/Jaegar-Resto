import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {productReducer} from './reducer/productsReducer'

export const store = configureStore({
  reducer: {
    // authReducer,
    productReducer
  },
  middleware: [thunk],
})

// window.store = store;

// let currentState = store.getState()


export default store
