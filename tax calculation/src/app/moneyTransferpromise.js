
function transactionSuccessMessage(){
    console.log("successfully transaction")
}

function transactionFailuerMessage(){
    console.log("failed transaction")
}

let transactionStatus='f';

const moneyTransfer = (acno, amount) => {
    return new Promise((r, rej) => {
      //transactionStatus = pull call rest api
      if (transactionStatus==='s') {
        r();
      } else {
        rej();
      }
    });
  }

  moneyTransfer('icici101', 140000).then(transactionSuccessMessage,transactionFailuerMessage);
  console.log("end of money transfer...");