import { render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import { MENU_API } from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";

global.fetch = jest.fn(() => {
    Promise.resolve({
        json: () => Promise.resolve(MENU_API),
    })
});

it("should load restaurant menu component", async () => {
    await act(async () => render(
    <Provider store={appStore}>
        <RestaurantMenu />
        </Provider>
        ));
    const accordionHeader = screen.getByText("Burger");
    fireEvent.click(accordionHeader);
});