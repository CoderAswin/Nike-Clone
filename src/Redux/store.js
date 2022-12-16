import {configureStore} from "@reduxjs/toolkit"

import { footerSlice } from "./Reducer/reducer" 

export default configureStore({
    reducer: footerSlice
    
})