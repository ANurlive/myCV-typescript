import getEducationData from "@/services/getEducationData";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchEducationsThunk = createAsyncThunk(
  "educations/get",
  async () => {
    return getEducationData();
  }
);
