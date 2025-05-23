import type { SkillType } from "./types";

export const saveSkillAction = (skills: SkillType) => ({
  type: "save_skill",
  payload: skills,
});

export const getSkillsAction = (skills: SkillType) => ({
  type: "get_skills",
  payload: skills,
});
