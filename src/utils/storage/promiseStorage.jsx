export let PromiseData = (data) => {
  window.localStorage.setItem("promise-data", JSON.stringify(data));
};
export let getPromiseData = JSON.parse(
  window.localStorage.getItem("promise-data")
);
