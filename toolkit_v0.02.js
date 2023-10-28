// Define your functions and variables
selectOptions : (data, label, value) => _.orderBy(_.uniqBy(data.map( obj => ({
  label: _.get(obj, label),
  value: _.get(obj, value)
})).filter(obj => !!obj.label && !!obj.value), o => o.label), 'label')

function myFunction2(str) {
  return `You entered ${str}`;
}

const myVariable1 = 'Value 1';
const myVariable2 = 42;

// Export the functions and variables as a toolkit object
const toolkit = {
  selectOptions,
  myFunction2,
  myVariable1,
  myVariable2
};

export {toolkit};
