import { BusinessList } from "./BusinessList.js";
let businesses = BusinessList()
const contentTarget = document.querySelector(".businesses")

const applicationHTML = businesses

contentTarget.innerHTML = applicationHTML