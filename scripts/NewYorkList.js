import { newYorkBusinesses } from "./database.js";
import { NewYork } from "./NewYork.js";

export const NewYorkList = () => {
    // call function that gets copy of business array
    // from database
    const newYorkArray = newYorkBusinesses
    // declare innerhtml variable to be exported to main.js
    let innerHTML = "<h1>New York Businesses</h1>"
    // Use the .forEach method to iterate through 
    // objects in businessArray
    newYorkArray.forEach(
        // for each business object
        (businessObject) => {
            // add the string from Business function
            // to the innerHTML
            innerHTML += `${NewYork(businessObject)}`
        }
    );
    // Return entire innnerhtml string
    return innerHTML
}
