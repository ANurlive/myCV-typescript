import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Expertise, { type ExperienceItem } from "./Expertise";

describe("Expertise component", () => {
  const mockExperienceItems: ExperienceItem[] = [
    {
      date: "2025",
      info: {
        company: "EPAM",
        job: "Front-end developer",
        description: "Creating SPA",
      },
    },
    {
      date: "2024",
      info: {
        company: "Google",
        job: "UI Engineer",
        description: "Design system development",
      },
    },
  ];

  it("renders all company names from props", () => {
    render(<Expertise data={mockExperienceItems} />);
    expect(screen.getByText("EPAM")).toBeInTheDocument();
    expect(screen.getByText("Google")).toBeInTheDocument();
  });

  it("renders all job titles", () => {
    render(<Expertise data={mockExperienceItems} />);
    expect(screen.getByText("Front-end developer")).toBeInTheDocument();
    expect(screen.getByText("UI Engineer")).toBeInTheDocument();
  });

  it("renders all descriptions", () => {
    render(<Expertise data={mockExperienceItems} />);
    expect(screen.getByText("Creating SPA")).toBeInTheDocument();
    expect(screen.getByText("Design system development")).toBeInTheDocument();
  });

  it("renders all dates", () => {
    render(<Expertise data={mockExperienceItems} />);
    expect(screen.getAllByText("2025")).toHaveLength(1);
    expect(screen.getByText("2024")).toBeInTheDocument();
  });
});
