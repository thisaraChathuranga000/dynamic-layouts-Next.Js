import { createSlice } from '@reduxjs/toolkit';

const selectedIdSlice2 = createSlice({
    name: 'selectedId2',
    initialState: '',
    reducers: {
      setSelectedId2: (state, action) => {
        return action.payload;
      },
    },
  });
  
export const { setSelectedId2 } = selectedIdSlice2.actions; 
export default selectedIdSlice2.reducer;