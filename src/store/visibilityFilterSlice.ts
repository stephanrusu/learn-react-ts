import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { VisibilityFilter } from '../constants/enums';

const initialState = VisibilityFilter.ShowAll;

const visibilityFilterSlice = createSlice({
  name: 'visibilityFilter',
  initialState,
  reducers: {
    setVisibilityFilter(_state, action: PayloadAction<VisibilityFilter>) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = visibilityFilterSlice.actions;

export default visibilityFilterSlice.reducer;
