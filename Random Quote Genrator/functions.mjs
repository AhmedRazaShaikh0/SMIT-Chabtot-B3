async function FetchData(e) {
    console.log('first')
  e.preventDefault();
  const quote = document.querySelector("#quote");
  //   const submit = document.querySelectorAll("#submit");
  const res = await fetch("https://hilarious-hare-tux.cyclic.app");
  const data = await res.json();
  console.log("data", data.message);
  quote.innerHTML = data.message;
  //   console.log(res);
  // return res.json();
}
// FetchData()
document.addEventListener("submit", FetchData);
