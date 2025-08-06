import postSkillsData from "@/services/postSkillData";
import type { SkillType } from "@/store/skills/types";

describe("postSkillsData", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  it("posts a skill and returns the updated skills list", async () => {
    const newSkill: SkillType = {
      skillName: "TypeScript",
      skillRange: 80,
    };

    const mockResponse: SkillType[] = [
      { skillName: "JavaScript", skillRange: 90, id: "1" },
      { skillName: "React", skillRange: 85, id: "2" },
      newSkill,
    ];

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockResponse),
    });

    const result = await postSkillsData(newSkill);

    expect(fetch).toHaveBeenCalledWith("/api/skills", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newSkill),
    });

    expect(result).toEqual(mockResponse);
  });

  it("throws an error when the request fails", async () => {
    const newSkill: SkillType = {
      skillName: "TypeScript",
      skillRange: 80,
    };

    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    await expect(postSkillsData(newSkill)).rejects.toThrow(
      "Something went wrong; please review your server connection!"
    );
  });
});
