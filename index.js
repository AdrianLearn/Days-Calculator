/**index.js
* Project to calculate the days between two given dates with elegant html and css
* Author: Adrian Leung
* Date: August 7, 2019
*/
const date1 = document.getElementById("date1"); // Date1 taken from imput box
const date2 = document.getElementById("date2"); // Date2 taken from input box
const resultSpan = document.querySelector('span'); // Reference to span to output days betwen
const _MS_PER_DAY = 1000 * 60 * 60 * 24; // Const to hold the millisconds in a day
date1.addEventListener('input',answer); // EventListeners to run the method if input is detected
date2.addEventListener('input',answer); // ""

/**
* Function to calculate the distance between the two days and output answer to span
*/
function answer(){
  const d1 = new Date(date1.value);
	const d2 = new Date(date2.value);
  const daysBetween = (d2 - d1) / _MS_PER_DAY;
  if(isNaN(daysBetween)){
     resultSpan.textContent = "x";
  }
  else if (daysBetween < 0){
    resultSpan.textContent = Math.abs(daysBetween);
  }
  else{
    resultSpan.textContent = daysBetween;
  }
}
