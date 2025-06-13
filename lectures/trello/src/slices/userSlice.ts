import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../interfaces/userInterface";

const initialState: User = {
  id: '',
  name: "",
  email: "",
  password: "",
  token: "string",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRedux: (state, action: PayloadAction<User>) => {
      state = action.payload;
    }
  },
});

export const { loginRedux } = userSlice.actions

export default userSlice.reducer