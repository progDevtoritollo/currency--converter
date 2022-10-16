import { createSlice } from '@reduxjs/toolkit'

 const initialState= {
  numberWithCurrInput: '',
  toCurrency:'UAH',
  isLoaded: false,
  isAlert:false,
  alertMassage:"",
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
    setIsAlert:(state, action) => {
      state.isAlert = action.payload;
    },
    setAlertMassage:(state, action) => {
      state.alertMassage = action.payload;
    },
    
  }
})

export const {setLoaded, setNumberWithCurr, setToCurrency,setIsAlert ,setAlertMassage } = appSlice.actions

export default appSlice.reducer