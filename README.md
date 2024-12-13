# Namaste React 🚀

---

# Install Packages 

## Parcel 
<br>

What **parcel** do for us :-
- Dev Build
- Local Server
- **Hot Module Replacement** Automatically refreshing our page.
- Parcel uses **File Watching Replacement** -> written in c++ to do *HMR*.
- Parcel takes vey less time means  [Parcel cache file] -> **Parcel Caching** things for us.
- A lot more......

- Put **node_modules**, **parcel.cache**, and **dist** in to **.gitignore.**

## Food Order Application
/** Components of Project
 * Header
 * - Logo
 * - Nav items [search bar, offers, help, sign in, cart]
 * 
 * Body
 * - food image cart
 * - Restaurants cart [rating, restaurant name, cuisine]
 * 
 * Footer
 * - company
 * - contact us
 * - available in
 * - legal terms
 * 
**/

## Two types of eExport/Import

- Default Export/Import

export default Component
import default Component

- Named Export/Import

export {Component} from path file
import {component} from path file

## React Hooks
 (Normal JS utlity functions) 
- 2 important React Hooks
- useState():
     - const arr = useState(resList);
    const listOfRestaurants = arr[0];
    const setListOfRestaurants = arr[1];

- useEffect() 

## Dummy Api