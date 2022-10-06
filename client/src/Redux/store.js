import { configureStore } from "@reduxjs/toolkit"
import Search from "./Slice"

export default configureStore({
    reducer:{
        Search: Search
    }
})