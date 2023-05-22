//Ask the user to enter a word 
let word = prompt("Enter a word");

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
for(let i = 0; i < originalWordArray.length; i++)
{
    originalWordArray.push(word.charAt(i)); //Add a character to the array for each character in the word entered by the user
}

//I'm going to use a for loop to add a character to the array for each character in the word entered by the user, but in reversed order
for(let i = word.length - 1; i >= 0; i--) 
{
    reversedWordArray.push(word.charAt(i)); //Add a character to the array for each character in the word entered by the user, but in reversed order
}

//Now, I have 2 arrays, each containing the word entered by the user, character by character, but in opposite orders
//I can go ahead, and compare each character in the 2 arrays, to see if the word entered by the user is a palindrome or not
function isPalindrome(wordArray = [], wordArrayReversedOrder = [])
{
    wordArray = originalWordArray;
    wordArrayReversedOrder = reversedWordArray;

    //Check if the word entered is a palindrome
    if(wordArray === wordArrayReversedOrder) 
    {
        //If the word entered is a palindrome, then print it to the console
        console.log("The word entered is a palindrome");
        //Return true if the word entered is a palindrome
        return true;
    }
    else
    {
        //If the word entered is not a palindrome, then print it to the console
        console.log("The word entered is not a palindrome");
        //Return false if the word entered is not a palindrome
        return false;
    }
}

//Call the function to check if the word entered is a palindrome or not
let result = isPalindrome(originalWordArray, reversedWordArray);
//Print the result to the console
console.log(result);
