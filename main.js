// Array Example
const $myColors = ["red", "green", "blue", "white", "black", "tomato"]

// Selecting the message list element from the DOM
const $messageList = document.getElementById("color-messages")
/*
    accessing the 3rd index of the array
    Adding the value at the 3rd index to the message list
    creating a new list item and appending it to the message list 
    using innerHTML
*/
$messageList.innerHTML += `<li>Value on 3rd index is: ${$myColors[3]} </li>`

// Updating the value at the 4th index of the array
$myColors[4] = "cyan"

// Adding the updated value at the 4th index to the message list
$messageList.innerHTML += `<li>Value on 4th index is: ${$myColors[4]} </li>`

