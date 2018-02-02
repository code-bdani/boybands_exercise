# Boy Bands
The [Boybands Exercise](https://github.com/nashville-software-school/ux-developer-milestones/blob/master/1-the-static-web/learning-materials/JS_BOYBANDS.md) for "01-the-static-web" milestone

## The Why
To use JS to update DOM elements

## The Instructions
### Requirements
Paste the following code into the `<body>` of the HTML file.

`<div id="boy-bands">
</div>`

`<div id="vegetables">
</div>`

Paste the following code into your JavaScript file.

`let bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
let vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// Get a reference to the appropriate DOM element for bands
const bandElement = document.getElementById(???);

// Get a reference to the appropriate DOM element for vegetables
const veggieElement = ???;

// Execute a for loop that will iterate over the arrays
for (let loopTracker = 0; loopTracker < ???; loopTracker += 1) {

  // Get a reference to the current item in the bands array
  const currentBand = ???;

  // Update the innerHTML value of the DOM element for bands

  // Get a reference to the current item in the vegetables array
  const currentVeggie = ???;

  // Update the innerHTML value of the DOM element for vegetables
}`

Update the code to iterate the two arrays provided (bands and vegetables) and output each element in the arrays into their corresponding HTML `<div>` element. Ensure that each item is in a block element (e.g. li, div, p, etc...)
