import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./Features/authSlice"
import petReducer from "./Features/petSlice"
import wishlistReducer from "./Features/wishlistSlice"
import adoptionReducer from "./Features/adoptionSlice"

const store = configureStore({
  reducer: {
    auth: authReducer,
    pets: petReducer,
    wishlist: wishlistReducer,
    adoptions: adoptionReducer
  }
})

store.subscribe(() => {
  const users = store.getState().auth.users
  localStorage.setItem("petcareUsers", JSON.stringify(users))
})

export default store