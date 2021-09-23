// import "./scss/style.scss"
// var btn = document.createElement("button")
// btn.innerHTML = "新增"
// document.body.appendChild(btn)
// btn.onclick = function () {
//   var div = document.createElement("div")
//   div.innerHTML = "item"
//   document.body.appendChild(div)
// }
// import "@babel/polyfill"
import counter from "./components/counter"
import number from "./components/number"
counter()
number()

if (module.hot) {
  module.hot.accept("./components/number", function () {
    document.body.removeChild(document.getElementById("number"))
    number()
  })
}
