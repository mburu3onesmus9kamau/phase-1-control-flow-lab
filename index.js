function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400)
  return "This one is on me!";
  else if (distance >2000 && distance <2500){
   return  "I will gladly take your thirty bucks.";
  }
  else if(distance >2500){
    return ("No can do.");
  }
}

function ternaryCheckCity(City){
  // Write your code here!
  if (City ==="NYC"){
return "Ok, sounds good.";
  }
  else {
    return "No go.";
  }

  
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  if (Tip ==="generous"){
    return "Thank you so much.";

    
  }
  else if (Tip === "not as generous" ){
    return 'Thank you.';
  }
  else {
return "Bye.";
  }
}