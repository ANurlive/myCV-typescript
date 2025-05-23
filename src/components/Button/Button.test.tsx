import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; // позволяет использовать toBeInTheDocument, toBeDisabled и другие матчеры
import Button from "./Button";

describe("Button component", () => {
  it("renders with text", () => {
    render(<Button text="Click me" />);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Button text="Click" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Click"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("disables the button when disabled is true", () => {
    render(<Button text="Disabled" disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("does not render text if showText is false", () => {
    render(<Button text="Hidden" showText={false} />);
    expect(screen.queryByText("Hidden")).not.toBeInTheDocument();
  });

  it("applies active class when isActive is true", () => {
    const { container } = render(<Button text="Active" isActive />);
    expect(container.firstChild).toHaveClass("active");
  });
});
