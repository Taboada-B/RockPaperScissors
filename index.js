//user input
const userChoice = prompt('r p or s');


let choice = ['r', 'p', 's']

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  //console.log(getRandomInt(3));
  // Expected output: 0, 1 or 2

  computerChoice = choice[getRandomInt(3)];

  console.log (`computer choice ${computerChoice} `) ;
  console.log (`Human choice ${userChoice} `) ;

  if (computerChoice == userChoice){
    console.log (`it is a tie`);
    window.alert ('its a tie');
  }
  // user picks r
  else if (userChoice == 'r' && computerChoice == 'p'){
    console.log (`you loses`);
    window.alert ('you loses');
  }
  else if(userChoice == 'r' && computerChoice == 's'){
console.log('you wins!');
window.alert ('you wins');
  }
// user picks p 
else if (userChoice == 'p' && computerChoice == 's'){
    console.log (`you loses`);
    window.alert ('you loses');
  }
  else if(userChoice == 'p' && computerChoice == 'r'){
console.log('you wins!');
window.alert ('you wins');
  }
  //user pics s
  else if (userChoice == 's' && computerChoice == 'r'){
    console.log (`you loses`);
    window.alert ('you loses');
  }
  else if(userChoice == 's' && computerChoice == 'p'){
console.log('you wins!');
window.alert ('you wins');
  }

else {
    console.log('recheck entry')
}


