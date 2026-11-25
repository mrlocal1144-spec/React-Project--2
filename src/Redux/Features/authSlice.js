import { createSlice } from "@reduxjs/toolkit"

const adminUser = {
  id: 1,
  name: "Admin",
  email: "admin@gmail.com",
  password: "admin123",
  role: "admin"
}

const getSavedUsers = () => {
  try {
    const savedUsers = JSON.parse(localStorage.getItem("petcareUsers"))

    if (Array.isArray(savedUsers)) {
      const adminExists = savedUsers.some(
        user => user.email.toLowerCase() === adminUser.email
      )

      return adminExists ? savedUsers : [adminUser, ...savedUsers]
    }

    return [adminUser]
  } catch {
    return [adminUser]
  }
}

const initialState = {
  users: getSavedUsers(),
  currentUser: null,
  error: ""
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    register: (state, action) => {
      const exists = state.users.find(
        user =>
          user.email.toLowerCase() === action.payload.email.trim().toLowerCase()
      )

      if (exists) {
        state.error = "Email already exists"
        return
      }

      const user = {
        id: Date.now(),
        ...action.payload,
        name: action.payload.name.trim(),
        email: action.payload.email.trim().toLowerCase(),
        role: "user"
      }

      state.users.push(user)
      state.currentUser = user
      state.error = ""
    },

    login: (state, action) => {
      const user = state.users.find(
        user =>
          user.email.toLowerCase() === action.payload.email.trim().toLowerCase() &&
          user.password === action.payload.password
      )

      if (!user) {
        state.error = "Invalid email or password"
        return
      }

      state.currentUser = user
      state.error = ""
    },

    logout: state => {
      state.currentUser = null
      state.error = ""
    },

    clearError: state => {
      state.error = ""
    }
  }
})

export const { register, login, logout, clearError } = authSlice.actions

export default authSlice.reducer