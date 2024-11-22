import React from "react";
import { render, screen } from "@testing-library/react";
import ContactsList from "../components/side-bar/contact-list";

// Mock the icons to avoid rendering issues during tests
jest.mock("react-icons/hi", () => ({
  HiOutlineMail: () => <span data-testid="icon-mail" />,
}));
jest.mock("react-icons/io5", () => ({
  IoCalendarOutline: () => <span data-testid="icon-calendar" />,
}));
jest.mock("react-icons/md", () => ({
  MdOutlineLocationOn: () => <span data-testid="icon-location" />,
}));
jest.mock("react-icons/tb", () => ({
  TbPhoneCalling: () => <span data-testid="icon-phone" />,
}));

describe("ContactsList", () => {
  it("renders the email contact item correctly", () => {
    render(<ContactsList />);
    const emailIcon = screen.getByTestId("icon-mail");
    const emailTitle = screen.getByText("Email");
    const emailLink = screen.getByRole("link", { name: /hugo970217@gmail.com/i });

    expect(emailIcon).toBeInTheDocument();
    expect(emailTitle).toBeInTheDocument();
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute("href", "mailto:hugo970217@gmail.com");
  });

  it("renders the phone contact item correctly", () => {
    render(<ContactsList />);
    const phoneIcon = screen.getByTestId("icon-phone");
    const phoneTitle = screen.getByText("Phone");
    const phoneInfo = screen.getByText("404 Not Found 📲");

    expect(phoneIcon).toBeInTheDocument();
    expect(phoneTitle).toBeInTheDocument();
    expect(phoneInfo).toBeInTheDocument();
  });

  it("renders the birthday contact item correctly", () => {
    render(<ContactsList />);
    const calendarIcon = screen.getByTestId("icon-calendar");
    const birthdayTitle = screen.getByText("Birthday");
    const birthdayDate = screen.getByText("Jan. 27, 2002 🐻");

    expect(calendarIcon).toBeInTheDocument();
    expect(birthdayTitle).toBeInTheDocument();
    expect(birthdayDate).toBeInTheDocument();
    expect(birthdayDate).toHaveAttribute("dateTime", "2002-01-27");
  });

  it("renders the location contact item correctly", () => {
    render(<ContactsList />);
    const locationIcon = screen.getByTestId("icon-location");
    const locationTitle = screen.getByText("Location");
    const locationAddress = screen.getByText("Taipei, Taiwan 🇹🇼");

    expect(locationIcon).toBeInTheDocument();
    expect(locationTitle).toBeInTheDocument();
    expect(locationAddress).toBeInTheDocument();
  });
});