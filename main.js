// console.log('CONNECTED!');

const firstObj = {};

const user = {
  username: 'biz.markie',
  password: 'abd123',
  lovesJavascript: true,
  favoriteNumber: 42,
}

// DOT NOTATION
// Get values out of an object
// console.log(user.lovesJavascript);
// console.log(user.username);

// BRACKET NOTATION
const passCode = 'password';
console.log(user[passCode]);
// console.log(user['username']);

// ASSIGNING VALUES

const newUser = {
  isNew: true,
}

// newUser.username = 'fresh.prince'; // dot notataion
// newUser['password'] = 'abcd1234'; // bracket notation
// newUser[1] = 'abcd1234'; // bracket notation
// console.log(newUser);


// METHODS (FUNCTIONS AS VALUES)
const newObject = {
  username: 'Teresa',
  sayHello: function () {
    console.log(`${this.username} says Hello!`);
  }
}

// newObject.username = 'Aja';
// newObject.sayHello();

// ITERATE OVER AN OBJECT
const userTwo = {
  username: 'trinity.christiana',
  password: 'xyz0987',
  lovesJavascript: true,
  favoriteNumber: 12,
}

// FOR IN LOOP
for (let key in userTwo) {
  // console.log(key); // keys
  console.log(userTwo[key]); // values
  // console.log(userTwo.key); // values NOOOOOOOOO
}
