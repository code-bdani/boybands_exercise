let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById("boybands");

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = document.getElementById("vegetables");

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
  ??? += `<p> ${bands[loopTracker]}</p>`;
  // Get a reference to the current item in the bands array
  const currentBand = ???;

  // Update the innerHTML value of the DOM element for bands
  document.getElementById("boybands").innerHTML = currentBand;

  // Get a reference to the current item in the vegetables array
  const currentVeggie = ???;

  // Update the innerHTML value of the DOM element for vegetables
  document.getElementById("vegetables").innerHTML = currentVeggie;
}

// // Execute a for loop that will iterate over the arrays
// for (let loopTracker = 0; loopTracker < bands.length; loopTracker += 1) {
//     for (let loopTracker = 0; loopTracker < vegetables.length; loopTracker += 1) {
//         ;
//     }
//   // Get a reference to the current item in the bands array
//   const currentBand = ???;

//   // Get a reference to the current item in the vegetables array
//   const currentVeggie = ???;

// }