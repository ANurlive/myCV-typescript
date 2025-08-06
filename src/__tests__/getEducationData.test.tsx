import getEducationData from "@/services/getEducationData";

// Мокаем глобальный fetch
global.fetch = jest.fn();

describe("getEducationData", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch and return data successfully", async () => {
    const mockData = [{ date: 2020, title: "Test", text: "Test text" }];
    (fetch as jest.Mock).mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockData),
    });

    const result = await getEducationData();
    expect(fetch).toHaveBeenCalledWith("/api/educations");
    expect(result).toEqual(mockData);
  });

  it("should throw an error if fetch fails", async () => {
    (fetch as jest.Mock).mockRejectedValue(new Error("Network error"));

    await expect(getEducationData()).rejects.toThrow(
      "Something went wrong; please review your server connection!"
    );
  });
});
