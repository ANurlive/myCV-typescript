import { render, screen } from "@testing-library/react";
import Timeline from "./TimeLine";
import { useSelector, useDispatch } from "react-redux";
import "@testing-library/jest-dom";

// Мокаем Redux хуки
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Мокаем FontAwesomeIcon, чтобы он не мешал тестам
jest.mock("@fortawesome/react-fontawesome", () => ({
  FontAwesomeIcon: () => <div data-testid="icon" />,
}));

describe("Timeline component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    (useSelector as unknown as jest.Mock).mockReturnValue({
      educations: [],
      status: "loading",
    });
    (useDispatch as unknown as jest.Mock).mockReturnValue(jest.fn());

    render(<Timeline />);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders error state", () => {
    (useSelector as unknown as jest.Mock).mockReturnValue({
      educations: [],
      status: "rejected",
    });
    (useDispatch as unknown as jest.Mock).mockReturnValue(jest.fn());

    render(<Timeline />);
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("renders education data correctly", () => {
    const mockEducations = [
      {
        date: 2022,
        title: "Harvard",
        text: "Studied law",
      },
      {
        date: 2023,
        title: "MIT",
        text: "Computer Science",
      },
    ];

    (useSelector as unknown as jest.Mock).mockReturnValue({
      educations: mockEducations,
      status: "fulfilled",
    });
    (useDispatch as unknown as jest.Mock).mockReturnValue(jest.fn());

    render(<Timeline />);
    expect(screen.getByText("Harvard")).toBeInTheDocument();
    expect(screen.getByText("MIT")).toBeInTheDocument();
    expect(screen.getByText("Studied law")).toBeInTheDocument();
    expect(screen.getByText("Computer Science")).toBeInTheDocument();
    expect(screen.getByText("2022")).toBeInTheDocument();
    expect(screen.getByText("2023")).toBeInTheDocument();
  });

  it("renders fallback message when no education data", () => {
    (useSelector as unknown as jest.Mock).mockReturnValue({
      educations: [],
      status: "fulfilled",
    });
    (useDispatch as unknown as jest.Mock).mockReturnValue(jest.fn());

    render(<Timeline />);
    expect(screen.getByText(/no education records found/i)).toBeInTheDocument();
  });
});
