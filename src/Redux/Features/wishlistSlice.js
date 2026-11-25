import { createSlice } from "@reduxjs/toolkit"

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: []
  },
  reducers: {
    toggleWishlist: (state, action) => {
      const exists = state.items.includes(action.payload)

      if (exists) {
        state.items = state.items.filter(
          id => id !== action.payload
        )
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { toggleWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
