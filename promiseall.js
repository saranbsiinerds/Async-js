const yt = new Promise ( res => {
    setTimeout(() => {
        console.log('Data from youTube')
        res({data: 'yt data'})
    },2000)
})

const fb = new Promise(res => {
    setTimeout(() => {
        console.log('data from facebook')
        res({data: 'fb data'})
    },4000)
})

//return data all at once
Promise.all([yt, fb]).then(result => console.log(result))