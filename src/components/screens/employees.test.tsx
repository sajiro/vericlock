import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { EmployeeList } from "./employees";

/* jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: jest.fn(),
}));

const mockFetchEmployees = jest.fn();

jest.mock("../../hooks/useVeriClockApi", () => ({
  useVeriClockApi: jest.fn(() => ({
    fetchEmployees: mockFetchEmployees,
  })),
})); */

describe("EmployeeList component", () => {
  it("renders loading", () => {
    render(<EmployeeList />);
    //expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
  /* it("renders employees", async () => {
    const mockEmployees = [
      { guid: "1", firstName: "John", lastName: "Doe" },
      { guid: "2", firstName: "Jane", lastName: "Doe" },
    ];

    mockFetchEmployees.mockResolvedValue(mockEmployees);

    render(<EmployeeList />);

    expect(screen.getByText("Fullname: John Doe")).toBeInTheDocument();
    expect(screen.getByText("Fullname: Jane Doe")).toBeInTheDocument();
  }); */
});
