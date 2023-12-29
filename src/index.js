function cityTyped(event) {
  event.preventDefault();
  let cityName = document.querySelector(".search-input");
  let h1 = document.querySelector(".current-city");
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
let span = document.querySelector("span");
span.innerHTML = `${dayDay} ${hour}:${mins},`;
// alert(`${dayDay} ${hour}:${mins}`);
