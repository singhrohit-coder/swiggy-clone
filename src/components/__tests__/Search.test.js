import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import BODY_API from "../mocks/mockDataBody.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react";
import "@testing-library/jest-dom";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(BODY_API);
        }
    })
})

/* 
The function is async because rendering or interactions with components like Body may involve asynchronous operations 
(e.g., loading data, state updates, or effects), and act ensures all updates are processed before assertions.
*/
it ("should render our body component with the search", async() => {
    await act(async () => render(
    <BrowserRouter>
    <Body />
    </BrowserRouter>
    ));

    const searchBtn = screen.getByRole("button", { name: "Search" });
    
    // test search input by .getByTestId(); bcz it always works..
    // const searchInput = screen.getByTestId("searchInput"); // this is another way to find something inside your screen..
    

    // fireEvent.change triggers the onChange event handler defined in the component (e.g., in Body.js) for the searchInput.
    // fireEvent.change(searchInput, { target: { value: "burger" } });// it take (e) event.

    // fireEvent.click(searchBtn);

    expect(searchBtn).toBeInTheDocument();
});