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
      const rate = data.conversion_rates[secendEl.value];

      console.log(rate);

      exchangEl.innerText = `1 ${firstEl.value} = ${
        rate + "  " + secendEl.value
      }`;

      worthSecendEl.value = (worthFirstEl.value * rate)
    });
}

firstEl.addEventListener("change", uapdate);
worthFirstEl.addEventListener("change", uapdate);

secendEl.addEventListener("change", uapdate);
