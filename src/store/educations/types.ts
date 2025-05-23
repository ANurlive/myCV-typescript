export type EducationType = {
  date: number;
  title: string;
  text: string;
};
// export enum EducationActionType {
//   SAVE_EDUCATIONS = "SAVE_EDUCATIONS",
// }
export type EducationsType = {
  educations: EducationType[];
  status: "loading" | "rejected" | "fulfilled";
};

export interface saveEducations {
  type: "save_educations";
  payload: EducationType[];
}
