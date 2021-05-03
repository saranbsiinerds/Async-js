const promise = new Promise((res, rej) => {
    setTimeout(() => {
        res('Hey!')
    }, 2000)
})

promise.then(val => console.log(val))