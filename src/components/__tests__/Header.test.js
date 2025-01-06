import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

it ("should load Header component with a login button", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        </Provider>
    </BrowserRouter>
    );
     // shows error couldn't understand the react-redux component. // For that add Provider. */}
    // After that => The above error occurred in the <Link> component.
    // This <Link/> is coming from react-router dom.
    // For that give Browser Router. Now it will understand <Link>.

    // let's check does it have a login button or not.
    const loginButton = screen.getByRole("button"); // -> for specific add extra parameters , ({ name: "Sign in" });
    // const loginButton = screen.getByText("Login"); -> not the good way

    expect(loginButton).toBeInTheDocument();
});

it ("should change Sign in button to Logout on click", () => {
    render(
        <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
    );

    const signinButton = screen.getByRole("button");

    fireEvent.click(signinButton);

    const logoutButton = screen.getByRole("button");

    expect(logoutButton).toBeInTheDocument();
});