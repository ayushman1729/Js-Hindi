const accountId = 144553
let accountEmail= "ayush@gmail.com"
var accountPassword="12345"
accountCity="jaipur"

// accountId=2  //not allowed
accountEmail="hc@gmail.com"
accountPassword="212121"
accountCity="Bengluru"

console.log(accountId);
/*
Prefer not to use var
beause of issue in block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword, accountCity]);