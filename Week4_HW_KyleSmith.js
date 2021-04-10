// Using template literals instead of concatenation, write a function that takes firstName and lastName 
// and returns ‘fistName lastName’

function literalsFullNames(firstName, lastName){

    // Takes the strings giving to the function and alows them to be use in the Template Literals
    let literalsFirstNames = firstName;
    let literalsLastNames = lastName;

    // uses Template Literals for faster calling to log
    console.log(`${literalsFirstNames} ${literalsLastNames}`);
}

literalsFullNames("Kyle", "Smith")

console.log("-----------------------------------------------------------------------------------------")

// Write the same function as above as an arrow function with a different name

// the arrow function (=>) 
let arrowFullNames = (firstName, lastName) => `${firstName} ${lastName}`
// TBH idk how to explain an arrow function i need to look into it more

literalsFullNames("Kyle", "Smith")

console.log("-----------------------------------------------------------------------------------------")

// Look up the JavaScript functions setTimeout() and setInterval(). 
// Notice how they each take a callback.

// Using setTimeout, write an anonymous (has no name assigned to it) 
// arrow function in the callback parameter position. The function should alert ‘Time is up!’. 
// Choose whatever length of time you want for the timeout.


setTimeout(() => {
    alert('Time is up!'); // sets a pop up to say "Time is up!" also alert it the pop up keyword
}, 2000); // 2000 = 2 secs

// Write an arrow function named askAreWeThereYet that alerts ‘Are we there yet?’. 
// Using setInterval, pass askAreWeThereYet into the callback parameter position. 
// Choose whatever length of time you want for the interval.

//
askAreWeThereYet = () => {
    alert('Are we there yet?'); // sets a pop up to say "Are we there yet?" also alert it the pop up keyword
}

setInterval(askAreWeThereYet, 8000); // 8000 = 8 secs

// In this step you are going to write a function that takes a callback to better understand how callbacks work.

// Write a new function named processSplicedValue that takes 3 parameters – an array, 
// the index of the element to be spliced from the array, 
// and a callback function that will process the sliced element.


function processSplicedValue(array,index,callback) {

    // Inside the function, use the first two parameters to splice an element from the array.

    // sets splicedValue to = the arrays string location
    let splicedValue = array[index];

    // Inside the function, call the callback function and pass the spliced value into it.

    // cuts of a part of the array
    array.splice(index,1);
    
    callback(splicedValue);
}

    // Outside of the function, create an array of strings, call processSplicedValue, 
    // and pass in the array you just created, an index number, and console.log into it. 
    
    //data = ["Cat","Dog","Milk","Cheese","Car","Bike","Running","Jump"];
    randomArrayStuff = ["Cat","Dog","Milk","Cheese","Car","Bike","Running","Jump"];
    
    // For example: processSplicedValue(arrayName, 2, console.log);

    // Calls the 3ed srting in the array "Cheese" logs it to the user and removes it
    processSplicedValue(randomArrayStuff,3,console.log);
    

    // Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
    
    // Calls Calls the 3ed srting in the array "Car" alerts it to the user and removes it
    processSplicedValue(randomArrayStuff,3,alert);
    

    // Call the processSplicedValue function again, but this time pass in an anonymous arrow function 
    //that alerts the spliced value.
 
    // Calls the 3ed srting in the array "Bike" logs it to the user and removes it
    processSplicedValue(randomArrayStuff,3,(value) => {alert(value)});
    

    // Call the processSplicedValue function one more time, 
    // but this time, pass in a custom function of your choice that you should create and name
    

function lengthOfSplicedAndArray(value){

    // tells the user the length of the of the 6th string in the array (If u start counting at 0)
    console.log(`${value.length} is the length of the spliced string`);

    // logs the lefter array strings for the user to see
    let arrayWithSpaces = '';

            for (let i = 0; i < randomArrayStuff.length; i++) { 
                if (i === randomArrayStuff.length - 1) {
                    arrayWithSpaces += randomArrayStuff[i];
                }   

                else {
                arrayWithSpaces += `${randomArrayStuff[i]} `;
                }
            }
        
            console.log(`Heres whats left of my array: ${arrayWithSpaces}`);


}
lengthOfSplicedAndArray(randomArrayStuff,3,lengthOfSplicedAndArray);
