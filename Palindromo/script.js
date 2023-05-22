//Ask the user to enter a word 
let word = prompt("Enter a word: ");

//Create an array that's going to contain the word entered by the user, character by character
let originalWordArray = [];
let reversedWordArray = [];

//Check if the word entered is valid 
if(word == null || word == "" || word == " ")  //Check if the word is null, empty or a space
{
    alert("Please insert a valid word"); //Alert the user if the word is not valid
    location.reload(); //Reload the page if the user doesn't insert a word
}

//Now, I'm going to use a for loop to add a character to the array for each character in the word entered by the user
for(let i = 0; i < word.length; i++)
{
    originalWordArray.push(word.charAt(i)); //Add a character to the array for each character in the word entered by the user
}

//I'm going to use a for loop to add a character to the array for each character in the word entered by the user, but in reversed order
for(let i = word.length - 1; i >= 0; i--) 
{
    reversedWordArray.push(word.charAt(i)); //Add a character to the array for each character in the word entered by the user, but in reversed order
}

//Create a function to check if the word entered is a palindrome or not
function isPalindrome(array = [], reversedArray = [])
{
    array = originalWordArray; //Set the originalWordArray to the array parameter
    reversedArray = reversedWordArray; //Set the reversedWordArray to the reversedArray parameter

    //Check if the word entered is a palindrome or not
    for(let i = 0; i < array.length; i++) 
    {
        if(array[i] === reversedArray[i]) //Check if the character in the originalWordArray is equal to the character in the reversedWordArray
        {
            console.log("The string is palindrome"); //Print to the console if the word entered is a palindrome
            return true; //Return true if the character in the originalWordArray is equal to the character in the reversedWordArray
        }
        else if (array[i] !== reversedArray[i]) //Check if the character in the originalWordArray is not equal to the character in the reversedWordArray
        {
            console.log("The string is not palindrome"); //Print to the console if the word entered is not a palindrome
            return false; //Return false if the character in the originalWordArray is not equal to the character in the reversedWordArray
        }
    }
}

//Call the function to check if the word entered is a palindrome or not
let result = isPalindrome(originalWordArray, reversedWordArray);
//Print the result to the console
console.log(result);
//Print the result to the HTML page
document.getElementById("result-palindrome").innerHTML = result ? "The string is palindrome" : "The string is not palindrome";

