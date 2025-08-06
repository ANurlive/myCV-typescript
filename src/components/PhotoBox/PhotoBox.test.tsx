import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PhotoBox from "./PhotoBox";

describe("PhotoBox component", () => {
  const baseProps = {
    name: "Alice Johnson",
    avatar: "https://example.com/avatar.jpg",
  };

  it("renders name and avatar", () => {
    render(<PhotoBox {...baseProps} />);
    expect(screen.getByText("Alice Johnson")).toBeInTheDocument();

    const img = screen.getByAltText("Alice Johnson") as HTMLImageElement;
    expect(img).toBeInTheDocument();
    expect(img.src).toBe("https://example.com/avatar.jpg");
  });

  it("renders optional title and description when provided", () => {
    render(
      <PhotoBox
        {...baseProps}
        title="Lead Developer"
        description="Experienced in React and TypeScript"
      />
    );

    expect(screen.getByText("Lead Developer")).toBeInTheDocument();
    expect(
      screen.getByText("Experienced in React and TypeScript")
    ).toBeInTheDocument();
  });

  it("applies correct theme and size classes", () => {
    const { container } = render(
      <PhotoBox {...baseProps} theme="light" size="large" />
    );

    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toMatch(/light/);
    expect(wrapper.className).toMatch(/large/);
  });

  it("defaults to dark theme and medium size", () => {
    const { container } = render(<PhotoBox {...baseProps} />);
    const wrapper = container.firstChild as HTMLElement;
    expect(wrapper.className).toMatch(/dark/);
    expect(wrapper.className).toMatch(/medium/);
  });
});
