// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOneButton = document.querySelector(".replace-one-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements (currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
// Attempting to display number of replaced items
// let newText = replaceAllButton.insertAdjacentText('afterend', "")
console.log(localStorage)
let previousSearch = localStorage.getItem("Previous search")
let text = document.createElement("p")
let node = document.createTextNode("")
text.appendChild(node)
replaceAllButton.appendChild(text)

replaceAllButton.addEventListener('click', function() {
    
    const findValue = findInput.value
    const replaceValue = replaceInput.value

    let replaced = 0

    if (findValue != "") {
        for (row = 0; row < rowElements.length; row++) {

            const cellElements = getCellElements(rowElements[row])

            for (cell = 0; cell < cellElements.length; cell++) {

                if (document.getElementById("case-sensitive").checked == true) {
                    cellElements[cell].innerText = cellElements[cell].innerText.toLowerCase()
                }

                if (cellElements[cell].innerText.includes(findValue)) {

                    const cellText = cellElements[cell].innerHTML.split(" ")

                    for (splitIndex = 0; splitIndex < cellText.length; splitIndex++) {
                        
                        const loopNumber = cellText[splitIndex].split("")

                        if (cellText[splitIndex].includes(findValue)) {
                            
                            for (let loops = 0; loops < loopNumber.length; loops++) {
                                cellElements[cell].innerHTML = cellElements[cell].innerHTML.replace(findValue, replaceValue)
                            }
                            replaced++
                        }
                    }
                }
            }
        }
        node.nodeValue = `${replaced} items replaced`
    }
    let JSONString = JSON.stringify(previousSearch + findValue)
    localStorage.setItem("Previous search", JSONString)
})

replaceOneButton.addEventListener('click', function() {
    const findValue = findInput.value
    const replaceValue = replaceInput.value

    if (findValue != "") {
        for (row = 0; row < rowElements.length; row++) {

            const cellElements = getCellElements(rowElements[row])

            for (cell = 0; cell < cellElements.length; cell++) {

                if (document.getElementById("case-sensitive").checked == true) {
                    cellElements[cell].innerText = cellElements[cell].innerText.toLowerCase()
                }
                
                if (cellElements[cell].innerText.includes(findValue)) {

                    const cellText = cellElements[cell].innerHTML.split(" ")

                    for (splitIndex = 0; splitIndex < cellText.length; splitIndex++) {
                        
                        const loopNumber = cellText[splitIndex].split("")

                        if (cellText[splitIndex].includes(findValue)) {
                            
                                cellElements[cell].innerHTML = cellElements[cell].innerHTML.replace(findValue, replaceValue)
                                splitIndex = cellText.length
                                cell = cellElements.length
                                row = rowElements.length
                        }
                    }
                }
            }
        }
    }
    let JSONString = JSON.stringify(previousSearch + findValue)
    localStorage.setItem("Previous search", JSONString)
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
