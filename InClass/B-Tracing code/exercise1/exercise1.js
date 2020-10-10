function greetPeople(people) {
  var greeting = "Hello";

  people.forEach(function (person) {
    message = `${greeting} ${person}`;
    let p = document.createElement("p");
    p.innerHTML = message;
    document.getElementById("main").appendChild(p);
    console.log(message);
  });

  return greeting;
}

/*
  Let's trace this piece of code - what is the value of result with this input
  
  */
var mentors = ["Irina", "Ashleigh", "Etza"];
var result = greetPeople(mentors);
