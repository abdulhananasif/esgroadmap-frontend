import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppState} from './type';

const initialState: AppState = {
  isLoggedIn: false,
  role: '',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsLoggedIn: (state, action: PayloadAction<boolean>) => {
      state.isLoggedIn = action.payload;
    },
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
  },
});

export const {setIsLoggedIn, setRole} = appSlice.actions;

export default appSlice.reducer;
