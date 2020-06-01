console.clear();
// Blocking (sync)
const sayHi = name => console.log(`Hello, ${name}`);
sayHi('Shaun');
sayHi('Devon');
sayHi('Keval');

// Non-Blocking (async)
setTimeout(sayHi, 2500, 'Michael');
setTimeout(sayHi, 3500, 'Gagandeep');
setTimeout(sayHi, 1500, 'Bob');
sayHi('Ilia');

// Callback
const farewell = name => console.log(`Goodbye, ${name}`);
const greeting = (name, callback) => {
  console.log(`Hello, ${name}`);

  callback(name);
}

greeting('Shaun McKinnon', farewell);