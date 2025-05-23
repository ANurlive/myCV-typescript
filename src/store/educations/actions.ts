import type { EducationType } from "./types";

export const saveEducations = (educations: EducationType[]) => ({
  type: "save_educations",
  payload: educations,
});
