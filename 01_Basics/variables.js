const accountId=144553
let accountEmail="Anupam@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;

// accountId=2 //not allowed

accountEmail="hfgv@yahoo.com"
accountPassword="435465"
accountCity="Sultanpur"

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/