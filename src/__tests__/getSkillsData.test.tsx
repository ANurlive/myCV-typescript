import getSkillsData from "@/services/getSkillsData";

describe("getSkillsData", () => {
  beforeEach(() => {
    // Reset mock before each test
    global.fetch = jest.fn();
  });

  it("returns data fetched from the API", async () => {
    const mockData = [{ name: "JavaScript" }, { name: "React" }];

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await getSkillsData();

    expect(fetch).toHaveBeenCalledWith("/api/skills");
    expect(result).toEqual(mockData);
  });

  it("throws an error when the request fails", async () => {
    (fetch as jest.Mock).mockRejectedValueOnce(new Error("Network Error"));

    await expect(getSkillsData()).rejects.toThrow(
      "Something went wrong; please review your server connection!"
    );
  });
});
