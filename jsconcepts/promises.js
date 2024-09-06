let promise = new Promise(function (resolve, reject) {
    const x = 'TestAutomation'
    const y = 'TestAutomation'
    if (x === y) {
        resolve()
    } else {
        reject()
    }
})

promise
    .then(function () {
        console.log('Success strings are equal')
    })
    .catch(function () {
        console.log('Some error has occurred')
    })
