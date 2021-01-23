// console.log('CONNECTED!');

const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event) => {
//   console.log(`YOU CLICKED ${event.target.id}!`);
//   // console.log(event);
// })

const whatIsTheId = (event) => {
  // console.log(event);
  console.log(`YOU CLICKED ${event.target.id}!`);

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
    document.querySelector('body').style.background = 'red';
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
    document.querySelector('body').style.background = 'white';
  }
}

button.addEventListener('click', whatIsTheId);

// TARGET `other-btn` and on click, run whatIsTheId
const button2 = document.querySelector('#other-btn');

button2.addEventListener('click', whatIsTheId);
