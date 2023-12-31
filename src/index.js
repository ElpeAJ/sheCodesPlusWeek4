function cityTyped(event) {
  event.preventDefault();
  let cityName = document.querySelector(".search-input"); //user entry
  let h1 = document.querySelector(".current-city"); //change in the html

  h1.innerHTML = `${cityName.value}`;

  // alert(`${cityName.value}`);
}
let cityForm = document.querySelector("form");
cityForm.addEventListener("submit", cityTyped);

// alert(new Date());
let now = new Date();
let day = now.getDay();
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let dayDay = days[day];
let hour = now.getHours();
let mins = now.getMinutes();

if (hour < 10) {
  hour = `0${hour}`;
}
if (mins < 10) {
  mins = `0${mins}`;
}
let span = document.querySelector("span");
span.innerHTML = `${dayDay} ${hour}:${mins},`;
alert(`This time is the actual day and time ${dayDay} ${hour}:${mins}`);

// function cityTyped(event) {
//   event.preventDefault();

//   try {
//     let cityName = document.querySelector(".search-input").value;

//     // Check for numbers using isNaN()
//     if (isNaN(cityName)) {
//       // No numbers found, proceed
//       let h1 = document.querySelector(".current-city");
//       h1.innerHTML = cityName;
//     } else {
//       throw new Error("Invalid input: Numbers are not allowed in city names.");
//     }
//   } catch (err) {
//     // Handle the error, display a user-friendly message
//     alert(err.message);
//   }
// }
// let cityForm = document.querySelector("form");
// cityForm.addEventListener("submit", cityTyped);

// alert(new Date());
// let now = new Date();
// let day = now.getDay();
// let days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// let dayDay = days[day];
// let hour = now.getHours();
// let mins = now.getMinutes();
// let span = document.querySelector("span");
// span.innerHTML = `${dayDay} ${hour}:${mins},`;
// alert(`${dayDay} ${hour}:${mins}`);
