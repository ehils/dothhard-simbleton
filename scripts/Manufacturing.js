export const Manufacturing = ( manufacturingObject ) => {
    // returns an string interpolation of html elements 
    // containing template literals of 
    // business name and lcoation
    return `
        <section class="businessList--manufacturing">
            <h2 class="business__companyName">${manufacturingObject.companyName}</h2>
            <div class="business__location">
                ${manufacturingObject.addressFullStreet} </br>
                ${manufacturingObject.addressCity} ${manufacturingObject.addressStateCode} ${manufacturingObject.addressZipCode}</br>
                <hr>
            </div>
        </section>
    `
}