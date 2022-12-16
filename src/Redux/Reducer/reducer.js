import {createSlice} from '@reduxjs/toolkit'

export const footerSlice = createSlice({
    name: "footer",
    initialState:{
        value: false,
    },

    reducers:{
        mouseOver: (state) => {
            state.value = true
        },

        mouseOut: (state) => {
            state.value = false
        }
    }
})

export const {mouseOver , mouseOut} = footerSlice.actions

export const selectBoolean = (state) => state.reducer.value

