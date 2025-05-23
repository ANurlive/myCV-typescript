import { render, screen, fireEvent } from "@testing-library/react";
import Navigation from "./Navigation";
import onScrollToSection from "@/utils/onScrollToSection";
import "@testing-library/jest-dom";

// Мокаем функцию onScrollToSection
jest.mock("@/utils/onScrollToSection", () => jest.fn());

describe("Navigation component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders all nav buttons with correct labels", () => {
    render(<Navigation showText={true} />);

    // Проверяем, что все метки navItems отображаются
    const labels = [
      "About me",
      "Education",
      "Experience",
      "Skills",
      "Portfolio",
      "Contacts",
      "Feedbacks",
    ];
    labels.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument();
    });
  });

  test("clicking a button changes active state and calls onScrollToSection", () => {
    render(<Navigation showText={true} />);

    const aboutBtn = screen.getByText("About me");
    const educationBtn = screen.getByText("Education");

    // Изначально "About me" активна
    expect(aboutBtn.closest("button")).toHaveClass("active");

    // Кликаем по "Education"
    fireEvent.click(educationBtn);

    // Проверяем, что active переключился
    expect(educationBtn.closest("button")).toHaveClass("active");
    expect(aboutBtn.closest("button")).not.toHaveClass("active");

    // Проверяем, что вызвалась функция прокрутки с правильным id
    expect(onScrollToSection).toHaveBeenCalledWith("education");
  });

  test("buttons show or hide text based on showText prop", () => {
    const { rerender } = render(<Navigation showText={true} />);
    expect(screen.getByText("About me")).toBeInTheDocument();

    rerender(<Navigation showText={false} />);
    expect(screen.queryByText("About me")).not.toBeInTheDocument();
  });
});
