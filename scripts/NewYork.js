export const NewYork = ( newYorkObject ) => {
    // returns an string interpolation of html elements 
    // containing template literals of 
    // business name and lcoation
    return `
        <section class="businessList--NewYork">
            <h2 class="business__companyName">${newYorkObject.companyName}</h2>
            <div class="business__location">
                ${newYorkObject.addressFullStreet} </br>
                ${newYorkObject.addressCity} ${newYorkObject.addressStateCode} ${newYorkObject.addressZipCode}</br>
                <hr>
            </div>
        </section>
    `
}