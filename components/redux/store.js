import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import {productReducer} from './reducer/productsReducer'

export const store = configureStore({
  reducer: {
    productReducer
  },
  middleware: [thunk],
})


export default store
