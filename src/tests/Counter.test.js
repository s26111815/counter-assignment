import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

describe("Counter component", () => {
    test("renders counter message", () => {
        const { getByText } = render(<Counter />);
        expect(getByText(/Counter/i)).toBeInTheDocument();
    });

    test("should render initial count with value of 0", () => {
        const { getByTestId } = render(<Counter />);
        expect(getByTestId("count")).toHaveTextContent("0");
    });

    test("clicking + increments the count", () => {
        const { getByTestId, getByText } = render(<Counter />);
        fireEvent.click(getByText("+"));
        expect(getByTestId("count")).toHaveTextContent("1");
    });

    test("clicking - decrements the count", () => {
        const { getByTestId, getByText } = render(<Counter />);
        fireEvent.click(getByText("-"));
        expect(getByTestId("count")).toHaveTextContent("-1");
    });
});