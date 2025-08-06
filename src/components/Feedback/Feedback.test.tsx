import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Feedback from "./Feedback";

describe("Feedback component", () => {
  const mockData = [
    {
      feedback: "This is amazing work!",
      author: {
        photoUrl: "https://example.com/photo.jpg",
        name: "Jane Doe",
        citeUrl: "https://linkedin.com/in/janedoe",
      },
    },
    {
      feedback: "Great communication and delivery.",
      author: {
        photoUrl: "https://example.com/photo2.jpg",
        name: "John Smith",
        citeUrl: "https://linkedin.com/in/johnsmith",
      },
    },
  ];

  it("renders a list of feedback items", () => {
    render(<Feedback data={mockData} />);
    expect(screen.getByText("This is amazing work!")).toBeInTheDocument();
    expect(
      screen.getByText("Great communication and delivery.")
    ).toBeInTheDocument();
  });

  it("renders author name and citeUrl as a link", () => {
    render(<Feedback data={mockData} />);
    expect(screen.getByText("Jane Doe,")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /linkedin\.com\/in\/janedoe/i })
    ).toBeInTheDocument();
  });

  it("renders author photo with correct src and alt", () => {
    render(<Feedback data={mockData} />);
    const img = screen.getByAltText("Jane Doe") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://example.com/photo.jpg");
  });
});
