import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import { products } from './reducers/productsReducer'
import { studentsReducer } from './reducers/studentsReducer';
import { teachersReducer } from './reducers/teachersReducer';

export const store = configureStore({
  reducer: {
    authReducer,
    studentsReducer,
    teachersReducer,
    sidebarReducer,
  },
  middleware: [thunk],
})

// window.store = store;

let currentState = store.getState()


export default store
