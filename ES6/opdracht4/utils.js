

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = (str) => str.split('').reverse().join('');
const countCharacters = (str) => str.length;
const logMessage = (msg) => console.log(msg);


export const mathUtils = {
  add,
  subtract
};

export const stringUtils = {
  capitalize,
  reverse,
  countCharacters
};

export const logger = {
  logMessage
};


