import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from './type';

const initialState: AppState = {
  isLoggedIn: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const {setIsLoggedIn} = appSlice.actions;

export default appSlice.reducer;
