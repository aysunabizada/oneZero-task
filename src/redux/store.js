import { configureStore } from '@reduxjs/toolkit'
import menuSlice from './menuSlice'
import counterSlice from './counterSlice'

const store = configureStore({
    reducer: {
        menu: menuSlice,
        counter: counterSlice,
    },
})

export default store