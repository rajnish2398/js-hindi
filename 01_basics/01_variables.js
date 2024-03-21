const accountId = 163632
let accountEmail = "rajnishk1523@gmail.com"
var accountPassword = "12345678"
accountCity = "Bhilai"
let accountState; 

// accountState mein undefined show hoga qki isme bs hmne declare krk chhod diya hai value ni assign kiye h
// value assign nahi karne se undefined show hoga console mein 

accountEmail = "rajnishk2398@gmail.com"
accountPassword = "87654321"
accountCity = "Durg"

// accountId = 2 changes not allowed for const

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])