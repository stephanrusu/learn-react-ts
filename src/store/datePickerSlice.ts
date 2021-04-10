import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  shown: new Date().getTime(),
  picked: new Date().getTime(),
};

const datePickerSlice = createSlice({
  name: 'datePicker',
  initialState,
  reducers: {
    setShown(state, action: PayloadAction<number>) {
      state.shown = action.payload;
    },
    setPicked(state, action: PayloadAction<number>) {
      state.picked = action.payload;
    },
    onPick(state, action: PayloadAction<IPickDate>) {
      state.shown = action.payload.shown;
      state.picked = action.payload.shown;
    },
  },
});

export const { setShown, setPicked, onPick } = datePickerSlice.actions;

export default datePickerSlice.reducer;
