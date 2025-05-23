import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { getSkillsThunk, saveSkillThunk } from "./thunk";
import type { SkillsType } from "./types";

const initialSkillsState: SkillsType = {
  skillsIsOpen: null,
  skills: [],
  status: "loading",
};
const skillsSlice = createSlice({
  name: "skills",
  initialState: initialSkillsState,
  reducers: {
    skillsIsOpenAction: (state, action: PayloadAction<boolean | null>) => {
      state.skillsIsOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkillsThunk.fulfilled, (state, action) => {
        state.skills = action.payload;
        state.status = "fulfilled";
      })
      .addCase(getSkillsThunk.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(getSkillsThunk.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveSkillThunk.fulfilled, (state, action) => {
        state.skills = action.payload;
        state.status = "fulfilled";
      })
      .addCase(saveSkillThunk.rejected, (state) => {
        state.status = "rejected";
      })
      .addCase(saveSkillThunk.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const skillsReducer = skillsSlice.reducer;
export const { skillsIsOpenAction } = skillsSlice.actions;
