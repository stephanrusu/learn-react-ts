import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import initialEvents from '../constants/initialEvents';

const eventSlice = createSlice({
  name: 'events',
  initialState: initialEvents,
  reducers: {
    createEvent(state, action: PayloadAction<IEvent>) {
      state.push(action.payload);
    },
  },
});

export const { createEvent } = eventSlice.actions;

export default eventSlice.reducer;
