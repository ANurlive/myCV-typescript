import type { SkillType } from "@/store/skills/types";

export const postSkillsData = async (skill: SkillType) => {
  try {
    const response = await fetch("/api/skills", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(skill),
    });
    // в качестве результата получаю весь обновленный список скиллов
    const result = await response.json();
    return result;
  } catch (error) {
    throw new Error(
      "Something went wrong; please review your server connection!"
    );
  }
};
export default postSkillsData;
