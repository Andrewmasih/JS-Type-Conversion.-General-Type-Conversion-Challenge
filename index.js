/* a function has been decleared and called 'increaseBrightness()', which takes 2 arguments, hexCode and increaseAmount.

The challenge is to call the function, giving it a string hexdecimal code (such as "aaaaaa") and brighten the colour by adding the 'increaseAmount' ("an integer") to its decimal representation 

Challenge:

1/ inside the 'increaseBrightness()' function, define a varible, hexCodeInDecimal, and assign it a value of hexCode converted to decimal

2/ next, inside the 'increaseBrightness()' function define a varible, 'brightened' and assign it a value of the hexCodeInDecimal varible plus the increaseAmount 

3/ finally, inside the increaseBrightness() function, define a varible, 'brightenedHex' and assign it a value of your 'brightened' varible converted back to hex.

4/ use the 'return' keyword to return 'brightenedHex' from the function.

Requirements:

1/ we should see the output when the function is called.

2/ the function needs to handle only positive values for 'increaseAmount', to test it will apply a few 'hexCode' and 'increaseAmount' and verify that the output is correct.
*/

function increaseBrightness (hexCode, increaseAmount) {
  let hexCodeInDecimal = parseInt(hexCode, 16);

  let brightened = hexCodeInDecimal + increaseAmount;

  let brightenedHex = brightened.toString(16);

  return brightenedHex; 

}

console.log(increaseBrightness("ooooof", 15));