import { createSlice } from '@reduxjs/toolkit'

 const initialState= {
  numberWithCurrInput: '',
  toCurrency:'UAH',
  isLoaded: false,
  };

export const appSlice = createSlice({
  name: 'app',
  initialState:initialState,
  reducers: {
    setLoaded :(state, action) => {
      state.isLoaded = action.payload;
    },
    setNumberWithCurr :(state, action) => {
      state.numberWithCurrInput = action.payload;
    },
    setToCurrency:(state, action) => {
      state.toCurrency = action.payload;
    },
  }
})

export const {setLoaded, setNumberWithCurr, setToCurrency } = appSlice.actions

export default appSlice.reducer