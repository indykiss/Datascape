

// What do I need to do?
// I need to find a react project that uses a form and check that out
// Go back to this file and delete all the webpacker stuff

// Need to make a post and get request
// Need to save all the scapes in an index and display that
    // So in my fetch, I need to dispatch into store (reducer then store technically)
    // Then also dispatch to backend database 
    // Look at notes within the external API fetch 
// Add in mapDispatchToProps and the other props thing
// Add in connect
// Need to understand conceptually what's going on with the store
// Need to take form out of containers, because they should be components 
    // Containers are using components and controlling

// Essentially:

// store is a store
// reducer updates store, gest the data to update when dispatch is called
// we call dispatch when we have data to update, which is in an action creator 

// Debugging/ seeing how things work
// console log things to see the order
// Go back to React and look at lab to see how to have a config






export const addScape = () => {
    return {
        type: "ADD_SCAPE",
    }
}

export const restartScape = scape => {
    return {
        type: "RESTART_SCAPE"
    }
}

