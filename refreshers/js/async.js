// ASYNC AND PROMISES REVIEW //


// const fetchData = (callback) => {
//     setTimeout(() => {
//         callback('Received data')
//     }, 2000) // pretend this is an api call that takes 2 seconds to retrieve data
// }

const fetchData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Received data')
        }, 2000) // pretend this is an api call that takes 2 seconds to retrieve data
    });
    return promise; // this line executes before return body in arrow function as this is synchronous
}

// asynchronous code does not happen immediately
setTimeout(() => {
    console.log('Executed!')
    fetchData()
    .then(text => 
        {console.log(text)
        return fetchData()
    })
    .then(text2 => 
        {console.log(text2 + ' again!')
    });
}, 1000); // milliseconds, 2000 = 2 seonds

console.log('This will execute before no matter how small the timeout')