function foo() {
    return function bar() {
      return function baz() {
        return 'I love CodeCademy'
      }
    }
   }
   console.log(foo()()());
   