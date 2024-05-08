import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface JsxStringState {
  value: string | TrustedHTML
}

const initialState: JsxStringState = {
  value: ''
};

const jsxStringSlice = createSlice({
  name: 'jsxString',
  initialState,
  reducers: {
    setJsxString: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setJsxString } = jsxStringSlice.actions;
export default jsxStringSlice.reducer;