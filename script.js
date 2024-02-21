const firstEl = document.getElementById("select")
const worthFirstEl = document.getElementById("worthFirst")
const secendEl = document.getElementById("select2")
const worthSecendEl = document.getElementById("worthSecend")

function uapdate(){
    console.log("hi");
}

firstEl.addEventListener("change",uapdate)
worthFirstEl.addEventListener("change",uapdate)

secendEl.addEventListener("change",uapdate)
