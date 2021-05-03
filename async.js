//async using await

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

async function getData() {
    const userValue = await userData('babool', 1234567)
    const videos = await userVideo(userValue.userName)
    console.log(videos)
}

getData()