import { BusinessList } from "./BusinessList.js";
import { ManufacturingList } from "./ManufacturingList.js";
import { NewYorkList } from "./NewYorkList.js";
import { PurchasingAgentList } from "./PurchasingAgentList.js";
//set imported business list function equal to variable
const applicationHTML = `${BusinessList()}  ${ManufacturingList()} ${NewYorkList()} ${PurchasingAgentList()}`
// using document.queryselector method, select the businesses 
// class in the HTML dodcument
const contentTarget = document.querySelector(".businesses")
// import business list html string into index.html
contentTarget.innerHTML = applicationHTML