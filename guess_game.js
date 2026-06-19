let count=5;
let flag=0
var secret_number=Math.floor(Math.random() * 100) + 1;
function num_guess(){
    while (count>0) {
        let guess=parseInt(prompt("Enter a number between 1 and 100 \nNo: of guesses left : "+count));
        count--;
        if(guess==secret_number)
        {
            alert("You Won the Game the correct number is "+secret_number);
            flag=1
            break;
        } 
        else if(guess<secret_number) 
        {
            alert("The number is low");
        } 
        else if(guess>secret_number)
        {
            alert("The number is high");
        }
        }
    if(flag==0){
        alert("Game over! The correct number was "+secret_number);
    }
}
num_guess();
