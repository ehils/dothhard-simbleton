
import { getPurchasingAgents } from "./database.js";
import { PurchasingAgents } from "./PurchasingAgents.js";
const purchasingAgentArray = getPurchasingAgents()
export const PurchasingAgentList = () => {
    // call function that gets copy of PurchasingAgent array
    // from database
    // const purchasingAgentArray = getPurchasingAgents()
    // declare innerhtml variable to be exported to main.js
    let innerHTML = "<h1>PurchasingAgents</h1>"
    // Use the .forEach method to iterate through 
    // objects in PurchasingAgentArray
    purchasingAgentArray.forEach(
        // for each PurchasingAgent object
        (purchasingAgentObject) => {
            // add the string from PurchasingAgent function
            // to the innerHTML
            innerHTML += `${PurchasingAgents(purchasingAgentObject)}`
        }
    );
    // Return entire innnerhtml string
    return innerHTML
}

const agentSearchResult = document.querySelector(".foundAgents")

document.
    addEventListener
        ("keypress", 
        (keyPressEvent) => {
            if (keyPressEvent.charCode === 13) {
                const searchInput = document.getElementById("agentSearch").value
                const foundAgent = purchasingAgentArray.find(agent =>{
                    return (agent.firstName.toLowerCase().includes(searchInput) ||
                            agent.lastName.toLowerCase().includes(searchInput)                         

                    ) 
                })
                if (foundAgent === undefined) {
                    window.alert("not her stoopid")
                } else agentSearchResult.innerHTML = `${PurchasingAgents(foundAgent)}`
                
            }
        })