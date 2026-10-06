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
// control + C or command + C to copy the line

$myColors.push("darksalmon")
// control + V or command + V to past the line
$messageList.innerHTML += `<li>Array values after push method: ${$myColors} </li>`

// use unshift to add hotpink to the array and display the message
$myColors.unshift("hotpink")
$messageList.innerHTML += `<li>Array values after unshift method: ${$myColors} </li>`

$myColors.pop()
$messageList.innerHTML += `<li>Array values after pop method: ${$myColors} </li>`

// use shift to remove first item and display the message
$myColors.shift()
$messageList.innerHTML += `<li>Array values after shift method: ${$myColors} </li>`

const $darkColors = ["darkgreen", "darkred", "darkblue"]

const $allColors = $myColors.concat($darkColors)
$messageList.innerHTML += `<li>allColors Array contains: ${$allColors} </li>`

const $colorResponse = document.getElementById("color-response")

function findColor(name) {
    // look for name in $allColors
    // if you found it then display Yes
    // else display No
    if ($allColors.includes(name)) {
        $colorResponse.innerHTML = `Yes we have ${name} color`
    } else {
        $colorResponse.innerHTML = `No we do not have ${name} color`
    }
}

findColor("lightgreen")

// i = i + 1 => i++

for (let i = 0; i < 5; i++) {
    console.log($allColors[i])
}