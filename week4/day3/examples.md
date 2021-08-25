# Promises

-What is a promise?
A promise in programming is a request that will be fulfilled or denied. 
If it is fulfilled the data comes at a later time.
If it is denied, the denial will also come at a later time.

## a promise has three statuses
-`pending`
-`fulfilled`
-`rejected`

- Async behavior
A delay in data when a certain action is called. A function that fires and continues 
to go through the rest of the code, but then later on it finishes.

- Fetch
`fetch()` that is used for async behavior.
`fetch returns a promise`
-Syntax
```
const jonSnowDataForReal = fetch("https://anapioficeandfire.com/api/characters/583")
.then(response => response.json())
.then(data => data) 
```

-ES6 Style of fetching, of handlin Async behavior
`Async/Await`
async function getJonSnowData(){
    const jonSnowData = await fetch("https://anapioficeandfire.com/api/characters/583")
    const json = await jonSnowData.json()
    return json
}
ES6 fat arrow
const getJonSnowData = async () => {
    await fetch("https://anapioficeandfire.com/api/characters/583")
    const json = await jonSnowData.json()
    return json
}
# HTTP Methods
    -GET "Asking for data to come to you"
    -POST "Sending data somewhere, typically a database"
    -PUT "Used to modify existing data"
    -DELETE "Delete data"
