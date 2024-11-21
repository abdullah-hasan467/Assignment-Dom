let counter = 0;  // To track correct answers
let currentLetterIndex = 0;  // To track the current letter in the sequence
let totalLetters = 20;  // Total number of letters in the test

function PlayGame() {
    if (currentLetterIndex < totalLetters) {
        const generateAlphabet = RandomAlphabet();  // Generate a random alphabet
        const page = showpage('letter');  // Get the page element with ID 'letter'
        
        page.innerText = generateAlphabet.toUpperCase();  // Display the letter

        // Wait for the user input for the current letter
        currentLetterIndex++;  // Move to the next letter after showing the current one
    } else {
        // Once the game reaches 20 letters, show the score
        endTest();
    }
}

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;  // Get the player's pressed key
    const currentShow = document.getElementById('letter');  // Get the letter element
    const currentShowPressed = currentShow.innerText;  // Get the letter displayed
    const currentShowPressedLowercase = currentShowPressed.toLowerCase();  // Convert to lowercase for comparison
    
    // Check if the player's input matches the current letter
    if (currentShowPressedLowercase === playerPressed) {
       
        counter++;  // Increment the counter for a correct answer
        const countScore = document.getElementById('scoreCount');
        countScore.innerText = counter;  // Update the score display
    } else {
        
    }

    console.log(currentShowPressed);
    console.log('Player Pressed: ' + playerPressed);

    // Call PlayGame to proceed to the next letter
    PlayGame();
}

document.addEventListener('keyup', handleKeyboardButtonPress);  // Listen for keyup event

function RandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';  // Alphabet string
    const alphabets = alphabetString.split('');  // Convert to array of characters

    const randomNumber = Math.random() * 26;  // Random number between 0 and 25
    const index = Math.floor(randomNumber);  // Get an integer index from 0 to 25
    
    const alphabetAndIndex = alphabets[index];  
    console.log('Generated Alphabet: ' + alphabetAndIndex + ' -> Alphabets Index: ' + index);  // Debugging
    
    return alphabetAndIndex;  // Return the letter
}

function nextPage() {
    const catchPage = getelementbyID('firstpage');  // Get element with ID 'firstpage'
    catchPage.classList.add('hidden');  // Hide the first page

    const showNewPage = getelementbyID('play-ground');  // Get element with ID 'play-ground'
    showNewPage.classList.remove('hidden');  // Show the play-ground page

    PlayGame();  // Call the PlayGame function to generate and display a letter
}

function endTest() {
    // When the test is complete, display the final score
    alert('Test complete! Your final score is ' + counter + ' out of ' + totalLetters);
    // Optionally, show a "Play Again" button or redirect to a different page
}

function getelementbyID(giveID) {
    const receiveID = document.getElementById(giveID);  // Get element by ID
    return receiveID;
}

function showpage(PageID) {
    const ShowPageID = document.getElementById(PageID);  // Get element by ID
    return ShowPageID;
}
