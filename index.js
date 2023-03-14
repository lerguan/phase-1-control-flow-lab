function scuberGreetingForFeet(distance){
  // Write your code here!
  let greeting;
  if (distance <= 400) {
    greeting = 'This one is on me!';
    return greeting;
  } else if (400 < distance && distance < 2000) {
    greeting = "That will be twenty bucks.";
    return greeting;
  } else if (2000 < distance && distance <= 2500) {
    greeting = "I will gladly take your thirty bucks.";
    return greeting;
  } else {
    greeting = "No can do.";
    return greeting;
  }
}

function ternaryCheckCity(city){
  // Write your code here!
return city === 'NYC'?"Ok, sounds good.":"No go.";
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch (tip) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye."
  }
}