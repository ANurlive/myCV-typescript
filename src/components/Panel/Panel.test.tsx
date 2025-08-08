import { render, screen, fireEvent } from "@testing-library/react";
import Panel from "./Panel";
import "@testing-library/jest-dom";


jest.mock("../Navigation/Navigation", () => () => (
  <div data-testid="navigation" />
));
jest.mock("../Button/Button", () =>
  function MockButton(props: { text: string; onClick: () => void }) {
    return <button onClick={props.onClick}>{props.text}</button>;
  }
);

jest.mock("../PhotoBox/PhotoBox", () =>
  function MockPhotoBox(props: { name: string; avatar: string }) {
    return (
      <div data-testid="photobox">
        {props.name} - {props.avatar}
      </div>
    );
  }
);

const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockNavigate,
}));


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
