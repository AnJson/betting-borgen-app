import { createSlice } from '@reduxjs/toolkit'

type UserState = {
  firstname: string | null
  lastname: string | null
  id: string | null
}

const initialState : UserState = {
  firstname: null,
  lastname: null,
  id: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.id = action.payload.id
    },

    logout(state) {
      state.firstname = null
      state.lastname = null
      state.id = null
    }
  }
})

export const authActions = userSlice.actions

export default userSlice.reducer
