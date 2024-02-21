const firstEl = document.getElementById("select");
const worthFirstEl = document.getElementById("worthFirst");
const secendEl = document.getElementById("select2");
const worthSecendEl = document.getElementById("worthSecend");
const exchangEl = document.getElementById("exchang");

uapdate();

function uapdate() {
  fetch(
    `https://v6.exchangerate-api.com/v6/c13e58d75de9cbc1ad60a237/latest/${firstEl.value}`
  )
    .then((res) => res.json())
    .then((data) => {
      const Rate = data.conversion_rates[secendEl.value];
      console.log(Rate);
      exchangEl.innerText = `1 ${firstEl.value} =
    ${Rate + " " + secendEl.value}`;
    worthSecendEl.value = (worthFirstEl.value * Rate)
    });

    
}

firstEl.addEventListener("change", uapdate);
worthFirstEl.addEventListener("change", uapdate);

secendEl.addEventListener("change", uapdate);
