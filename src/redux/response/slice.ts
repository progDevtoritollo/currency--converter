import { createSlice } from '@reduxjs/toolkit'

 const initialState= {
    data: null,
    rates:[""],
  };

export const responseSlice = createSlice({
  name: 'response',
  initialState:initialState,
  reducers: {
    setResponse :(state, action) => {
      state.data = action.payload;
    },
    setRates:(state, action) => {
      state.rates = Object.keys(action.payload);
    },

  }
})

export const {setResponse, setRates } = responseSlice.actions

export default responseSlice.reducer