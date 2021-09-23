// import "./scss/style.scss"
// import "@babel/polyfill"
import counter from "./components/counter"
import number from "./components/number"
counter()
number()

const arr = [1, 2, 3, 4]
console.log(arr.includes(1))
if (module.hot) {
  module.hot.accept("./components/number", function () {
    document.body.removeChild(document.getElementById("number"))
    number()
  })
}
