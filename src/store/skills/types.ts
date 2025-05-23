export type SkillType = {
  skillName: string;
  skillRange: number | string;
  id?: string;
};
export type SkillsType = {
  skills: SkillType[];
  status: "loading" | "rejected" | "fulfilled";
  skillsIsOpen: boolean | null;
};

export type saveSkillActionType = {
  type: "save_skill";
  payload: SkillType;
};

export type getSkillsActionType = {
  type: "get_skills";
  payload: SkillType[];
};
