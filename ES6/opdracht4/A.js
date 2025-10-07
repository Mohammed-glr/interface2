import {
    mathUtils, stringUtils, logger
} from './utils.js'

console.log(mathUtils.add(2, 3));
console.log(mathUtils.subtract(5, 2));

console.log(stringUtils.capitalize("hello"));
console.log(stringUtils.reverse("world"));
console.log(stringUtils.countCharacters("hello world"));

logger.logMessage("This is a log message.");