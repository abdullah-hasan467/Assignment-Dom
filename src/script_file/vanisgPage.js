function PlayGame() {
    const generateAlphabet = RandomAlphabet();  // Generate a random alphabet
    const page = showpage('letter');  // Get the page element with ID 'letter'
    
     // The 'page' element is already referenced, no need to assign again.

     const pageDown  = page.innerText = generateAlphabet.toUpperCase();  // Set the text to the generated letter in uppercase
}

 function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
   const currentShow = document.getElementById('letter');
   const currentShowPressed = currentShow.innerText;
  

   if (currentShowPressed==playerPressed){
    alert('Presed right')
   }
   else{
    alert("Wrong Key Pressed")
   }
   console.log(currentShowPressed);
 console.log('Player Pressed: '+playerPressed) ;


}

document.addEventListener('keyup', handleKeyboardButtonPress) 
 console.log ('Button Pressed') ;

function RandomAlphabet() {
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';  // Alphabet string
    const alphabets = alphabetString.split('');  // Convert to array of characters

    const randomNumber = Math.random() * 26;  // Random number between 0 and 25
    const index = Math.floor(randomNumber);  // Get an integer index from 0 to 25
    
    //console.log('Generated index: ' + index);  // Debugging the index
    
    const alphabetAndIndex = alphabets[index];  
     console.log('Generated Alphabet: ' + alphabetAndIndex + ' -> Alphabets Index: '+ index);  //// Get the alphabet at the random indexs
    return alphabetAndIndex;  // Return the letter
}

function nextPage() {
    const catchPage = getelementbyID('firstpage');  // Get element with ID 'firstpage'
    catchPage.classList.add('hidden');  // Hide the first page

    const showNewPage = getelementbyID('play-ground');  // Get element with ID 'play-ground'
    showNewPage.classList.remove('hidden');  // Show the play-ground page

    PlayGame();  // Call the PlayGame function to generate and display a letter
}

function getelementbyID(giveID) {
    const receiveID = document.getElementById(giveID);  // Get element by ID
    return receiveID;
}

function showpage(PageID) {
    const ShowPageID = document.getElementById(PageID);  // Get element by ID
    return ShowPageID;
}
