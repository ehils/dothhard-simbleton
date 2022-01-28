import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"


// Establish a list of active businesses
export const BusinessList = () => {
    // call function that gets copy of business array
    // from database
    const businessArray = getBusinesses()
    // declare innerhtml variable to be exported to main.js
    let innerHTML = "<h1>Active Businesses</h1>"
    // Use the .forEach method to iterate through 
    // objects in businessArray
    businessArray.forEach(
        // for each business object
        (businessObject) => {
            // add the string from Business function
            // to the innerHTML
            innerHTML += `${Business(businessObject)}`
        }
    );
    // Return entire innnerhtml string
    return innerHTML
}
