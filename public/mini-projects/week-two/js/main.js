let avengers = [
  "Thor",
  "Wasp",
  "Captain America",
  "Iron Man",
  "Hulk",
  "Vision",
  "Hank Pym",
  "Black Panther",
  "Quicksilver",
  "Mantis",
  "Spiderman",
];
avengers.pop();
avengers.push("Black widow");
console.log(avengers);
avengers.splice(2, 6, "Nebula, Moondragon");

let justiceLeague = [
  "Batman",
  "Superman",
  "Wonder Woman",
  "Flash",
  "Green Lantern",
  "Aquaman",
];
let alltheKids = avengers.concat(justiceLeague);
alltheKids.sort();
alltheKids.reverse();
console.log(alltheKids);

// document.getElementById("result").innerHTML = alltheKids;
result.innerHTML = alltheKids;
