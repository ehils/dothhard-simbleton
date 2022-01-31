import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

const businessArray = getBusinesses()

// Establish a list of active businesses
export const BusinessList = () => {
    // call function that gets copy of business array
    // from database
    // declare innerhtml variable to be exported to main.js
    let businessinnerHTML = "<h1>Active Businesses</h1>"
    // Use the .forEach method to iterate through 
    // objects in businessArray
    businessArray.forEach(
        // for each business object
        (businessObject) => {
            // add the string from Business function
            // to the innerHTML
            businessinnerHTML += `${Business(businessObject)}`
        }
    );
    // Return entire innnerhtml string
    return businessinnerHTML
}

export const companySearchResultArticle = document.querySelector(".foundCompanies")

// when a company name is typed into search bar, 
// and enter is pushed, the corresponding company appears
// event bubbling from querySelector (search bar id) to document, capttures inward, bubbles outward
// document
//     .addEventListener(
//             // listens for type of event (keypress event)
//             "keypress",
//             // Callback = function that runs everysingle time event happens
//             // target = things event happens on
//             // KeyPress event listening for key press
//             (keyPressEvent) => {
//                 // key listened for is enter (13)
//                if ( keyPressEvent.charCode === 13) {
//                     // defining a variable that is equal to the value of the search bar
//                     const searchInput = document.getElementById("companySearch").value
//                     // define variable as equal to .find method
//                     // .find method takes businessArray as an arguement
//                     const foundBusiness = businessArray.find(business => 
//                         // iterates through business array to see if
//                         // compmany name property includes any of the value of search input ( ex: "CAR" >enter> "what has a value of "Car")
//                         {return business.companyName.toLowerCase().includes(searchInput)})
//                         // this ^ is a shortened version of the following:
//                         // (business) => {
//                             // if (business.companyName.includes(searchInput)) {
//                                 // return true}

//                             // }
//                             // Condition says if the value isn't found to display an error message
//                             if (foundBusiness === undefined || "") {
//                                 window.alert("that ain't here")
//                                 // if the business is found, call the Business function with the found business as an arguement
//                             } else companySearchResultArticle.innerHTML =`${Business(foundBusiness)}`
//                         }
                
//                }
//             )

        
                    
                    
            
            /*  if enter is pressed, then the following happens
                1) User types company name
                2) When the user presses 'Enter', find the matching business, or
                display message saying "business not found"
                3)define variable equal to input

            



                You can use the `.includes()` string method to
                see if a smaller string is part of a larger string. boolean

                Example: business.companyName.includes(keyPressEvent.target.value)
            */