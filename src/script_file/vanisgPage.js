function PlayGame(){
    const generateAlphabet = RandomAlphabet();
    console.log(generateAlphabet);  // To check what letter is being generated
}

function RandomAlphabet(){
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    //console.log(alphabets);

    const randomNumber = Math.random() * 25;  // Random number between 0 and 25
    const index = Math.round(randomNumber);  
    console.log(' Index '+ index)

    const alphabetAndIndex = alphabets[index]// Round it to get an integer index
    //console.log(index)

    //return alphabet;  // Return the letter at that index
}

function nextPage(){
    const catchPage = document.getElementById('firstpage');  // Correct method name
    catchPage.classList.add('hidden');  // Hide the first page

    const showNewPage = document.getElementById('play-ground');  // Assuming you are getting the 'play-ground' element
    showNewPage.classList.remove('hidden');  // Show the play-ground page

    PlayGame();  // Call the PlayGame function
}
