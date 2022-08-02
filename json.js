// The JSON format is syntactically similar to the code for creating JavaScript objects.
//  Because of this, a JavaScript program can easily convert JSON data into JavaScript objects. 


// // Converting a string to a native object
var s = '{"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}'

var obj = JSON.parse(s);
console.log(typeof  obj);
console.log(obj);

// // Converting a object to a native string
var s = {"first_name" : "Sammy", "last_name" : "Shark", "location" : "Ocean"}

var obj = JSON.stringify(s);
console.log(obj);
console.log(typeof  obj);


