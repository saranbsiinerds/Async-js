//async using promise

console.log('Start')

function userData(email,password) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res({userName : email, password: password})
        }, 2000)
    })
}

function userVideo(email) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(['vid1', 'vid2', 'vid3'])
        }, 3000)
    })
}

userData('asd@abc.com', 12345)
.then(user => userVideo(user.email))
.then(video => userVideo(video))
.then(details => console.log(details))

// userVideo(user.userName)
// .then(videos => console.log(videos))



console.log('Finish!')