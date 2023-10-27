function checkEvenOrOdd(e) {
  e.preventDefault();
  let number = document.getElementById("numberInput").value;
  let resultElement = document.querySelector(".result");

  // if (number.length == 0) {
  //     resultElement.innerHTML = "Enter Valid Number";
  // }
  // else if (number % 2 === 0) {
  //     resultElement.innerHTML = number + " is even.";
  // } else {
  //     resultElement.innerHTML = number + " is odd.";
  // }

  number.length == 0
    ? (resultElement.innerHTML = "Enter Valid Number")
    : number % 2 === 0
    ? (resultElement.innerHTML = number + " is even.")
    : (resultElement.innerHTML = number + " is odd.");
}

document.addEventListener("submit", checkEvenOrOdd);
