
import { createSlice } from "@reduxjs/toolkit"

const adoptionSlice = createSlice({
  name: "adoptions",
  initialState: {
    items: []
  },
  reducers: {
    applyAdoption: (state, action) => {
      const exists = state.items.some(
        item =>
          item.petId === action.payload.petId &&
          item.userId === action.payload.userId
      )

      if (!exists) {
        state.items.push({
          id: Date.now(),
          ...action.payload,
          status: "Pending"
        })
      }
    },

    updateAdoptionStatus: (state, action) => {
      const adoption = state.items.find(
        item => item.id === action.payload.id
      )

      if (adoption) {
        adoption.status = action.payload.status
      }
    }
  }
})

export const { applyAdoption, updateAdoptionStatus } = adoptionSlice.actions
export default adoptionSlice.reducer
