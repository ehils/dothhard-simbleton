// Function which returns a string of business name and lcoation
// function take business object as a parameter
export const Business = ( businessObject ) => {
    // returns an string interpolation of html elements 
    // containing template literals of 
    // business name and lcoation
    return `
        <section class="business">
            <h2 class="business__companyName">${businessObject.companyName}</h2>
            <div class="business__location">
                ${businessObject.addressFullStreet} </br>
                ${businessObject.addressCity} ${businessObject.addressStateCode} ${businessObject.addressZipCode}</br>
                <hr>
            </div>
        </section>
    `
}