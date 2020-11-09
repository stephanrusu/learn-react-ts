import { createSlice } from '@reduxjs/toolkit';
import initialKanban from '../constants/initialKanban';

const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: initialKanban,
  reducers: {}
});


export default kanbanSlice.reducer
