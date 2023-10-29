let uniqueNumbers = [];

// Get all the correct numbers (no duplicates)
for (let i = 1000; i <= 9999; i++) {
    let numStr = i.toString();
    let hasDuplicate = false;

    for (let j = 0; j < numStr.length; j++) {
        if (numStr.indexOf(numStr[j]) !== numStr.lastIndexOf(numStr[j])) {
            hasDuplicate = true;
            break;
        }
    }

    if (!hasDuplicate) {
        uniqueNumbers.push(i);
    }
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}






//Interact with HTML to send feedback to the player about the results
let hiddenNumber = getRandomElement(uniqueNumbers).toString(); 
$(document).ready(function() {
    console.log(hiddenNumber); 

    $("#button-addon2").click(function() {
        const inputValue = $("input[aria-label='Your guess']").val();
        let result = [];
        if(uniqueNumbers.includes(parseInt(inputValue))){
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue[i] === hiddenNumber[i]) {
                result.push(".");
            } else {
                for (let j = 0; j < hiddenNumber.length; j++) {
                    if (inputValue[i] === hiddenNumber[j] && i !== j) {
                        result.push("-");
                        break; 
                    }
                }
            }
        }

        // Shuffle the result
        result = shuffleArray(result);

        //check if player won
        let winningCondition = result.join('');
        if (winningCondition==="...."){
            $("#resultDisplay").text("YOU WON!!");
                }
        else if (winningCondition ===""){
            $("#resultDisplay").text("None of these digits exist in the hidden number");
        }
        else{
            $("#resultDisplay").text(result.join(''));

        }
    }
    else {
        $("#resultDisplay").text("Incorrect value!");
    }
    });
});




function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
}
