// console.log('CONNECTED!');

function saysHelloToUser(user) {
  return `Hello ${user}!`;
}

function saysGoodbyeToUser(user) {
  return `Goodbye ${user}!`;
}

// A FUNCTION THAT TAKES IN A FUNCTION AS AN ARGUMENT
function createGreeting(user, cb) {
  return cb(user);
}


// CONSOLE LOGGING THE RETURN STATEMENTS OF EACH CALLBACK
console.log(createGreeting('Dan', saysHelloToUser)); // 'Hello Dan!'
console.log(createGreeting('Dan', saysGoodbyeToUser)); // 'Goodbye Dan!'
