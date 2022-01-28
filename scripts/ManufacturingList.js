import { manufacturingBusinesses } from "./database.js";
import { Manufacturing } from "./Manufacturing.js";

export const ManufacturingList = () => {
    // call function that gets copy of business array
    // from database
    const manufacturingArray = manufacturingBusinesses
    // declare innerhtml variable to be exported to main.js
    let innerHTML = "<h1>Manufacturing Businesses</h1>"
    // Use the .forEach method to iterate through 
    // objects in businessArray
    manufacturingArray.forEach(
        // for each business object
        (businessObject) => {
            // add the string from Business function
            // to the innerHTML
            innerHTML += `${Manufacturing(businessObject)}`
        }
    );
    // Return entire innnerhtml string
    return innerHTML
}
