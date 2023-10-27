function handlesubmit(event) {
  event.preventDefault();
  let data = document.querySelector("#input");
  let img = document.querySelector(".weatherIcon img");
  let status = document.querySelector(".weatherCondition");
  let temp = document.querySelector("#celcius");

  temp.innerHTML = data.value;
  let weather = data.value;

  if (weather.length == 0) {
    temp.innerHTML = "0";
    status.innerHTML = "Enter Temp";
    console.log("hot weather");
  } else if (weather > 100 || weather < -100) {
    temp.innerHTML = "0";
    status.innerHTML = "Enter Valid Temp";
    img.src = "./images/959873.png";
  } else if (weather > 30) {
    status.innerHTML = "Too hot";
    img.src = "./images/day.svg";
  } else if (weather > 20) {
    status.innerHTML = "Moderate";
    img.src = "./images/cloudy-day-1.svg";
  } else if (weather > -100) {
    status.innerHTML = "Too cold";
    img.src = "./images/snowy-6.svg";
  }
}

document.addEventListener("submit", handlesubmit);
