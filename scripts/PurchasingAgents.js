// Function which returns a string of agent name and lcoation
// function take agent object as a parameter
// returns an string interpolation of html elements 
// containing template literals of 
// agent name and lcoation
export const PurchasingAgents = ( agentObject ) => {
    return `
        <section class="agent">
            <h2 class="agent__Name">${agentObject.firstName} ${agentObject.lastName}</h2>
            <div class="agent__company"><b>${agentObject.company}</b></div></br>
            <div class="agent__phoneNumber"><b>${agentObject.phoneNumber}</b></div>
            <hr>
        </section>
    `
}