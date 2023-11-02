// Import Lodash as an ES6 module from a CDN
import faker from 'https://cdn.jsdelivr.net/npm/@faker-js/faker@8.2.0/+esm';

//check that faker imported as part of this module
checkFaker(){
		return faker.date.future(1)
	}

// Define your functions and variables
function selectOptions(data, label, value) {
  return _.orderBy(
    _.uniqBy(data.map(obj => ({
      label: _.get(obj, label),
      value: _.get(obj, value)
    })).filter(obj => !!obj.label && !!obj.value), o => o.label), 'label');
}

// New function that uses Lodash
function myFunctionWithLodash(arr) {
  // Example Lodash operation - Sort the array
  return _.sortBy(arr);
}

const myVariable1 = 'Value 1';
const myVariable2 = 42;

// Export the functions and variables as a toolkit object
const toolkit = {
  checkFaker,
  selectOptions,
  myFunctionWithLodash, // Add the new function
  myVariable1,
  myVariable2
};

export { toolkit };

export default {}