/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export type KumaState = {
  texts: string[]
}

const initialState: KumaState = {
  texts: ['Welcome to the Kuma world', 'Connect wallet and adopt a kuma']
}

export const kumaSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTexts: (state, { payload }) => {
      state.texts = payload
    },
  },
})

export const {  setTexts } = kumaSlice.actions

export const selectKuma = (state: RootState): KumaState =>
  state.kuma

export default kumaSlice.reducer
