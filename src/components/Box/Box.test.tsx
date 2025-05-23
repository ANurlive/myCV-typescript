import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Box from "./Box";

describe("Box component", () => {
  it("renders title", () => {
    render(<Box title={"Hello"} content={undefined} />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders children nodes", () => {
    const children = <button>I'm button</button>;
    render(<Box title={"Hello"} content={children} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should get id attribute from props", () => {
    const id = "index";
    const { container } = render(
      <Box title={"Hello"} content={undefined} id={id} />
    );
    const seekingElement = container.querySelector('[id="index"]');
    expect(seekingElement).toBeInTheDocument();
  });
});
