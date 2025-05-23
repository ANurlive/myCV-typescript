import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Address from "./Address";

describe("Address component", () => {
  it("should render ContactItem component", () => {
    render(<Address />);
    expect(screen.getByText("facebook")).toBeInTheDocument();
  });
});
