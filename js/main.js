// quiz

// 1) var myArray = [1, 2, 3];
// myArray[2]
// returns 3

// 2) var lastItem = myArray[myArray.length -1]

// 3) var reverseArray = myArray.reverse()

// 4) for ( i = 0; i< myArray.length; i++) {console.log(myArray[i].length);}

// 5) var divIntro = document.getElementById("intro");
// var divTag = document.getElementsByTagName("div");
// var divClass = document.getElementsByClassName("box");

// discussion (javascript array methods on w3schools)
// 1) w3schools, toString() doesn't work for spaces, but join() does.
// 2) .sort
//  popping and sorting
// 3) .push
// 4) .pop
// 5) .shift
// 6) .unshift
// 7) the length of the new array
// 8) same
// 9) the item that was popped out of the array
// 10) same as 9)
// 11) 2 because it's the length of the string
// 12) 3 and stargate is unshifted to the front
// 13) "overboard" because that is the last item is removed
// 14) "escape from new york" because it was removed from the front
// 15) it sorts things alphabetically, it does not sort numbers numerically, it sorts them in ascending order by the first digit
// 16) slicing the array
// 17)it grabs everything that has a particular class name and returns an array of all of those things, which is why you need square bracket method because you need to specify which item you want to select
// 18) same except tag name
// 19)object
// 20)object
// 21) it needs an input and loop to target multiple elements
// 22) it needs input 0 to get elements by tag name
// 23) string
// 24) var myArray = document.getELementsByTagName("div");
// it returns an array
// 25) var myArray = document.getELementsByTagName("a");
// for (i = 0; i< x.length; i++){
// add href attribute to each anchor tag with value www.google.com
// x[i].href = ("http:/www.google.com")
// }
// 26) var myLiArray = document.getElementsByTagName("li");
// var lastLi = myLiArray[mLiArray.length - 1]
// lastLi.textContent = "Milk"

// first step4) create an array with 5 different strings. Log the length of yoru array to the console.
var fruits = ["Banana", "Orange", "Apple", "Mango", "Cherry"];
// console.log(fruits.length)
// step5) log the length of each of the strings inside your array to the console. How will you log the length of each item inside an array? Do not do this with 5 different console.log commands.
var arrayLength = fruits.length;
for (var i = 0; i < arrayLength; i++){
  console.log(fruits[i].length);
}
// step6) reverse the array and console the array again. Has the array been reversed? What if we wanted to create a reversed COPY of the array?

// step7) comment out your reverse function.Create a copy of your original array (do not simply re-type your array; create a new variable containing an empty array, and use.push() to add each item in your original array intothe new,empty array).Now reverse the copied array.

// step8)Sort your array of strings alphabetically.

// step9)Create an array of at least 5 numbers. Each number should be at least two digits. Sort the array numerically, in ascending order (smallest to biggest). Then sort it in descending order.

// step10)Create an array with three strings.

// step11)Create an array with three strings.

// step12)Now remove one string from the beginning of the array. Log the final array to the console. How many strings does it have?

// step13)Comment out all of your current code, and create a new, empty array stored in a variable.

// step14)Create an input and a button element. Create an unordered list element.

// step15)Create a function which will run when the button is clicked. This function should add the value of the input to your empty array. THEN, your function should effectively loop through your array and append each item inside a list item to the unordered list in your HTML. It should do this correctly no matter how many strings are in your array (in other words, if your array has one string, you will see one list item; if your array has five strings, you will see five list items).

// step16)Now create a second, third, and fourth button element.

// step17)Create a function for EACH new button which fires on click. One function will alphabetically sort your array and re-render the list items in your HTML. One function will remove the last item from your array and re-render the list items in your HTML. One function will remove the first item from your array and re-render the list items in your HTML. (To be redundantly, unnecessarily, maddeningly clear, your list items in your HTML should reflect the items contained in your array in JavaScript)
