// Import Lodash as an ES6 module from a CDN
import lodash from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js';

// Define your functions and variables
function selectOptions(data, label, value) {
  return lodash.orderBy(
    lodash.uniqBy(data.map(obj => ({
      label: lodash.get(obj, label),
      value: lodash.get(obj, value)
    })).filter(obj => !!obj.label && !!obj.value), o => o.label), 'label');
}

// // New function that uses Lodash
// function myFunctionWithLodash(arr) {
//   // Example Lodash operation - Sort the array
//   return _.sortBy(arr);
// }

const myVariable1 = 'Value 1';
const myVariable2 = 42;

// Export the functions and variables as a toolkit object
const toolkit = {
  selectOptions,
  myFunctionWithLodash, // Add the new function
  myVariable1,
  myVariable2
};

export { toolkit };

export default {}
