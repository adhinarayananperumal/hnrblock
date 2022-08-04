
//https://thewebdev.info/2022/02/27/how-to-pass-parameters-to-a-promise-function-with-javascript/#:~:text=To%20pass%20parameters%20to%20a%20promise%20function%20with%20JavaScript%2C%20we,want%20to%20returns%20the%20promise.&text=to%20create%20the%20f%20function,created%20by%20the%20Promise%20constructor.
const { Console } = require("console");

var promise = new Promise(function (resolve, reject) {
    const x = "geeksforgeeks";
    const y = "geeksforgeeks"


    setTimeout(() => {
        if (x === y) {
            resolve();
        } else {
            reject();
        }
    }, 3000);

    throw new Error();

}).catch(function (error) {
    console.log("The error is handled, continue normally");
    throw new Error();

});

promise.
    then(function () {
        console.log('Success, You are a GEEK');
    }, function () {
        console.log('Rejected, You are not a GEEK');
    });
console.log("end of program");
