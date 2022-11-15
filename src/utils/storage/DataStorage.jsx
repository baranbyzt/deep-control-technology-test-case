export let SaveData = (data) => {
  window.localStorage.setItem("link-data", JSON.stringify(data));
};
export let getData = JSON.parse(window.localStorage.getItem("link-data"));
