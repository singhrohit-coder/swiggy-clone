import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom";

test("should load page successfully", () => {
    render(<Grocery />);

    const heading = screen.getByRole("heading");
    
    expect(heading).toBeInTheDocument();
});