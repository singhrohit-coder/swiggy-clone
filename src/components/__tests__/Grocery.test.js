import { render, screen } from "@testing-library/react";
import Grocery from "../Grocery";
import "@testing-library/jest-dom";


describe("Grocery page test case", () => {

    // whatever passed inside this will be test before all the tests starts.
    // beforeAll and beforeEach
    beforeAll(() => {
        console.log("Before All");
    });  

    beforeEach(() => {
        // helpful to do some cleanup task .
        console.log("Before Each");
    });  

    afterAll(() => {
        console.log("After All");
    });  

    afterEach(() => {
        console.log("After Each");
    });  

    test("should load page successfully", () => {
        render(<Grocery />);
    
        const heading = screen.getByRole("heading");
        
        expect(heading).toBeInTheDocument();
    });
    
    // test("should load buton successfully", () => {
    //     render(<Grocery />);
    
    //     // there are diffferent roles in our html and these roles are defined by jest in the testing library
    //     const button = screen.getByRole("button");
        
    //     expect(button).toBeInTheDocument();
    // });
    
    it("should load h1Element successfully", () => {
        render(<Grocery />);
    
        const h1Element = screen.getByText("Our Grocery Store & we have a lot of child components inside this web page!!");
    
        expect(h1Element).toBeInTheDocument();

        // Note = Whenever there are multiple items we write All.
        // test/it both works it depends on person to person.
    });
});
