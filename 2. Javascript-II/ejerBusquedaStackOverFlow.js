/* 
Returns whether or not the provided string contains a substring of "cake" in it.
https://stackoverflow.com/questions/1789945/how-to-check-whether-a-string-contains-a-substring-in-javascript
*/

function containsCake(string) {
    return string.includes('cake');
  }
  
  // Should return true
  console.log("containsCake('I think cake is my soul mate.') returns: " + containsCake('I think cake is my soul mate.'));
  
  // Should return false
  console.log("containsCake('Pie is certainly the coolest dessert.') returns: " + containsCake('Pie is certainly the coolest dessert.'));
