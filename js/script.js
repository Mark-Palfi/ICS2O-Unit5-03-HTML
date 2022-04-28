// Created by: Mark Palfi
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * This function gets users street name and number and shows it back to user.
 */
function enterClicked() {
  // input
  const age = document.getElementById("Age").value

 // # if ... then ... else example */
  if (age >= 17) {
    console.log("you can see an R rated movie alone. ");
    document.getElementById("+17").innerHTML =
  }  else if (age >= 13) {
    console.log("you can see an PG-13 rated movie alone. ");
    document.getElementById("+13").innerHTML =
  }  else if (age >= 5) {
    console.log("you can see an G rated movie alone. ");
    document.getElementById("+5").innerHTML =
  }
  // output
  document.getElementById("+17").innerHTML =
    "you can see an R rated movie alone."
  document.getElementById("+13").innerHTML =
    "you can see an PG-13 rated movie alone."
  document.getElementById("+5").innerHTML =
    "you can see an G rated movie alone."
}