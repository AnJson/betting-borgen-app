import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
  firstname: string | null
  lastname: string | null
  id: string | null
  token: string | null
}

const initialState : UserState = {
  firstname: null,
  lastname: null,
  id: null,
  token: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.id = action.payload.id
      state.token = action.payload.token
    },

    logout(state) {
      state.firstname = null
      state.lastname = null
      state.id = null
      state.token = null
    }
  }
})

export const userActions = userSlice.actions

export default userSlice.reducer
