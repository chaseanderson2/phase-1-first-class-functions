function receivesAFunction(callback) {
    
    callback()
  }

  function returnsANamedFunction() {
    return function namedFunction() {
      // Code for the named function
    };
  }

function returnsAnAnonymousFunction()   {
    return function()   {

    };
}

