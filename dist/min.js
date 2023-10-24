(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['exports'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    factory(exports);
  } else {
    // Browser globals
    factory(root.myToolkit = {});
  }
}(typeof self !== 'undefined' ? self : this, function (exports) {
  // Your module code here

  // Define your functions and variables
  function myFunction1() {
    return 'function1!'
  }

  function myFunction2(str) {
    return `You entered ${str}`
  }

  const myVariable1 = 'Value 1';
  const myVariable2 = 42;

  // Export the functions and variables as a toolkit object
  const toolkit = {
    myFunction1,
    myFunction2,
    myVariable1,
    myVariable2,
  };

  // Attach the toolkit object to exports for CommonJS or the global object for the browser
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    module.exports = toolkit;
  } else {
    exports.myToolkit = toolkit;
  }
}));
