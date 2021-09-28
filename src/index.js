function getComponent() {
  return import(/* webpackChunkName:"lodash" */ "lodash").then(
    ({ default: _ }) => {
      const element = document.createElement("div")
      element.innerHTML = _.join(["Samuel", "Wang"], "-")
      return element
    }
  )
}

getComponent().then((element) => {
  document.body.appendChild(element)
})
// import _ from "lodash"
// const element = document.createElement("div")
// element.innerHTML = _.join(["Samuel", "Wang"], "-")
// document.body.appendChild(element)
