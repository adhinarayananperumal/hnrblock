
function loginSuccessMessage(){
    console.log("successfully login")
}

function loginFailuerMessage(){
    console.log("failed login")
}

const authenticateLogin = (username, password) => {
    return new Promise((resolve, reject) => {
      //...
      if (username=='username') {
        resolve();
      } else {
        reject(Error());
      }
    });
  }
  authenticateLogin('username1', 'password').then(loginSuccessMessage,loginFailuerMessage);
  console.log("end...");