import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/user-event";
import ContactItem from "./ContactItem";

describe("ContactItem component", () => {
  it("renders with text", () => {
    render(<ContactItem text="check" icon="skype" />);
    expect(screen.getByText("check")).toBeInTheDocument();
  });

  it("renders title", () => {
    render(<ContactItem text="check" icon="skype" title="title" />);
    expect(screen.getByText("title")).toBeInTheDocument();
  });

  it("renders the correct icon for email", () => {
    render(<ContactItem text="test@example.com" icon="email" />);
    const icon = screen.getByTestId("contactItemDiv").querySelector("svg");
    expect(icon).toBeInTheDocument();
  });

  it("calls handleClick when clicked", () => {
    const openSpy = jest.spyOn(window, "open").mockImplementation(() => null);
    render(<ContactItem text="check" icon="skype" title="title" />);
    const clickingDiv = screen.getByTestId("contactItemDiv");
    fireEvent.click(clickingDiv);

    expect(openSpy).toHaveBeenCalledTimes(1);
    expect(openSpy).toHaveBeenCalledWith("skype:check", "_blank");

    openSpy.mockRestore();
  });
});
