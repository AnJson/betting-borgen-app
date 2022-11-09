import { createSlice } from '@reduxjs/toolkit'

export type UserState = {
  firstname: string | null
  lastname: string | null
  id: string | null
  token: string | null
  expiresIn: number | null
}

const defaultState = {
  firstname: null,
  lastname: null,
  id: null,
  token: null,
  expiresIn: null
}

const savedState = localStorage.getItem('bb-user')
const initialState : UserState = savedState ? JSON.parse(savedState) : defaultState

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login(state, action) {
      state.firstname = action.payload.firstname
      state.lastname = action.payload.lastname
      state.id = action.payload.id
      state.token = action.payload.token
      state.expiresIn = action.payload.expiresIn

      localStorage.setItem('bb-user', JSON.stringify({
        firstname: state.firstname,
        lastname: state.lastname,
        id: state.id,
        token: state.token,
        expiresIn: state.expiresIn
      }))
    },

    logout(state) {
      state.firstname = null
      state.lastname = null
      state.id = null
      state.token = null
      state.expiresIn = null

      localStorage.removeItem('bb-user')
    }
  }
})

export const userActions = userSlice.actions

export default userSlice.reducer
