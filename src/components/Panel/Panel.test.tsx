import { render, screen, fireEvent } from "@testing-library/react";
import Panel from "./Panel";
import "@testing-library/jest-dom";

// Моки для зависимостей
jest.mock("../Navigation/Navigation", () => () => (
  <div data-testid="navigation" />
));
jest.mock("../Button/Button", () => ({ text, onClick }: any) => (
  <button onClick={onClick}>{text}</button>
));
jest.mock("../PhotoBox/PhotoBox", () => ({ name, avatar }: any) => (
  <div data-testid="photobox">
    {name} - {avatar}
  </div>
));

// Мокаем useNavigate
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));

// Мокаем myData
jest.mock("@/constants/aboutMe", () => ({
  myData: {
    name: "John Doe",
    avatar: "/john.jpg",
  },
}));

describe("Panel component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("does not render sidebar when sidebarOpen is false", () => {
    const { container } = render(
      <Panel sidebarOpen={false} showText={true} sizeAvatar="medium" />
    );
    expect(container.firstChild).toBeNull();
  });

  it("renders PhotoBox, Navigation, and Button when sidebarOpen is true", () => {
    render(<Panel sidebarOpen={true} showText={true} sizeAvatar="medium" />);

    expect(screen.getByTestId("photobox")).toHaveTextContent("John Doe");
    expect(screen.getByTestId("navigation")).toBeInTheDocument();
    expect(screen.getByText("Go back")).toBeInTheDocument();
  });

  it("calls navigate on Go Back button click", () => {
    render(<Panel sidebarOpen={true} showText={true} sizeAvatar="medium" />);
    fireEvent.click(screen.getByText("Go back"));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
