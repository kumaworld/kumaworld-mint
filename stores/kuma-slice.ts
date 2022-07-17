/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from './store'

export type KumaState = {
  texts: string[]
  isAdopting: boolean
}

const initialState: KumaState = {
  texts: ['Welcome to the Kuma world', 'Connect wallet and adopt a kuma'],
  isAdopting: false,
}

export const kumaSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setTexts: (state, { payload }) => {
      state.texts = payload
    },
    setIsAdopting: (state, { payload }) => {
      state.isAdopting = payload
    },
  },
})

export const {  setTexts, setIsAdopting } = kumaSlice.actions

export const selectKuma = (state: RootState): KumaState =>
  state.kuma

export default kumaSlice.reducer
