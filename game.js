'strict mode';

// let x = document.querySelectorAll('.btn').textContent="lol";
// let y = document.querySelector('.message').onmouseenter = abc;

// function abc() {

//     console.log("hello i am touched ");
    

// }
const secrentNumber = Math.floor(Math.random() * 20) + 1;

const highscore = 0;
let score = 20;
document.querySelector('.number').textContent = secrentNumber;

document.querySelector('.again').addEventListener('click', function again() {
    -

    location.reload();

    
})

document.querySelector('.check').addEventListener('click',function xyz(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess)
    if (!guess) {
        document.querySelector('.message').textContent = "Number not selected";
        
    }else if (guess > 20) {
       document.querySelector('.message').textContent = "Number Out OF Raange";
    }

     else if (guess === secrentNumber) {
        document.querySelector('.message').textContent = "Correct Answer";
        // document.querySelector('.highscore').textContent = guess;
        document.querySelector('body').style.backgroundColor = "gray";
        document.querySelector('.number').textContent = secrentNumber;
        // if (score > highscore) {
        //     highscore = score;
        //     document.querySelector('.highscore').textContent = highscore;
        //  }

        
    } else if (guess > secrentNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
            document.querySelector('.score').textContent = 0;
        }

        
    } else if (guess < secrentNumber) {
         if (score >  1) {
             document.querySelector('.message').textContent = 'Too Low';
              
        score = score - 1;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost';
             document.querySelector('.score').textContent = 0;
             document.querySelector('body').style.backgroundColor = "red";
        }


        
    
}

})



