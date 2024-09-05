function curriedMultiply(a) {
    return function(b) {
        return a * b
    }
 }
 // Write your code here
 nestedFunction = curriedMultiply(3);
 result = nestedFunction(2);
 console.log(result)
 