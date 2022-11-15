import { createSlice } from "@reduxjs/toolkit";

const Session = createSlice({
  name: "session",
  initialState: {
    sessionManagment: false,
  },
  reducers: {
    setSessionManagment: (state, action) => {
      state.sessionManagment = action.payload;
    },
  },
});

export default Session.reducer;
export const getSessionManagment = (state) => state.session.sessionManagment;
export const { setSessionManagment } = Session.actions;
