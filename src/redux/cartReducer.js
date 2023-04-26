import {createSlice} from '@reduxjs/toolkit'

const initialState = {
	parts: []
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action) => {
			const item = state.parts.find(item => item.id === action.payload.id)

			if (item) {
				item.quantity += action.payload.quantity
			} else {
				state.parts.push(action.payload)
			}

		},
		removeItem: (state, action) => {
			state.parts = state.parts.filter(item => item.id !== action.payload)
		},
		resetCart: (state) => {
			state.parts = []
		},
	},
})

// Action creators are generated for each case reducer function
export const {addToCart, removeItem, resetCart} = cartSlice.actions

export default cartSlice.reducer