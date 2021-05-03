//Async js using callback

console.log('start')

function userData(email, password, callback) {
    setTimeout(() => {
        callback ({userEmail: email, userPass: password})
    }, 3000)
}

function userVideos(email, callback) {
    setTimeout(() => {
        callback(['vid1', 'vid2', 'vid3'])
    }, 3000)
}

const user = userData('asd@test.com', 12345, (user) => {
    console.log(user);
    userVideos(user.email, (vid) => {
        console.log(vid)
    })
})


console.log('Finish!')