import { createAsyncThunk } from "@reduxjs/toolkit";
import type { SkillType } from "./types";
import postSkillsData from "@/services/postSkillData";
import getSkillsData from "@/services/getSkillsData";

export const saveSkillThunk = createAsyncThunk(
  "skills/saveSkill",
  async (skill: SkillType) => {
    const result = await postSkillsData(skill);
    // console.log(result);
    localStorage.setItem("skills", JSON.stringify(result));
    // тут он вместе с id отправляет.
    return result.skills;
  }
);

export const getSkillsThunk = createAsyncThunk("skills/getSkills", async () => {
  const result = await getSkillsData();
  // console.log(result);
  return result.skills;
});
