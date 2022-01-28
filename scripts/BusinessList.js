import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

// const contentTarget = document.querySelector(".businesses")
// Establish a list of active businesses
export const BusinessList = () => {
    const businessArray = getBusinesses()
    let innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            innerHTML += `${Business(businessObject)}`
        }
    );
    return innerHTML
}
