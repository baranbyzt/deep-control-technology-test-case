export let passowrdControl = (check) => {
  let validRegex = /^[^¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{4,40}$/;
  return check.match(validRegex) ? true : false;
};
export let emailControl = (check) => {
  let validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return check.match(validRegex) ? true : false;
};
