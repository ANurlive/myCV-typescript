import { createSlice } from "@reduxjs/toolkit";
import { fetchEducationsThunk } from "./thunk";
import type { EducationsType } from "./types";

const initialEducationsState: EducationsType = {
  educations: [],
  status: "loading",
};

const educationsSlice = createSlice({
  name: "educations",
  initialState: initialEducationsState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducationsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchEducationsThunk.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.educations = action.payload;
      })
      .addCase(fetchEducationsThunk.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

export const educationsReducer = educationsSlice.reducer;
