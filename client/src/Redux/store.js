import { configureStore } from "@reduxjs/toolkit"
import Search from "./Slice"
import Cart from "./CartSlice"

export default configureStore({
    reducer:{
        Search: Search,
        Cart : Cart,
    }
})