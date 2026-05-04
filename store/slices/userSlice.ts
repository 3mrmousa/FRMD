// import { createSlice } from "@reduxjs/toolkit";

// type UserState = {
//   user: any;
//   token: string | null;
//   isAuthenticated: boolean;
//   isAdmin: boolean;
// };

// const initialState: UserState = {
//   user: null,
//   token: null,
//   isAuthenticated: false,
//   isAdmin: false,
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       state.isAuthenticated = true;
//       state.isAdmin = action.payload.isAdmin || false;
//     },
//     logoutSuccess: (state) => {
//       state.user = null;
//       state.token = null;
//       state.isAuthenticated = false;
//       state.isAdmin = false;
//     },
//   },
// });

// export const { loginSuccess, logoutSuccess } = userSlice.actions;
// export default userSlice.reducer;
