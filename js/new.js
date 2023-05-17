let input= document.querySelector(".digit")
let result = document.querySelector('.result')
function gradeCal(e){
    let value = e.target.value
    
    if(value > 100){
        result.innerHTML = "Invalid value"
    }
    else if (value < 0){
        result.innerHTML = "Invalid value"
    }
    else{

        if(value >= 80 && value <=100){
            result.innerHTML ="You got A+"
        }
        else if(value >= 70 && value <80){
            result.innerHTML ="You got A"
        }
        else  if(value >= 60 && value <70){
            result.innerHTML ="You got A-"
        }
        else if(value >= 50 && value <60){
            result.innerHTML ="You got B"
        }
        else if(value >= 40 && value <50){
            result.innerHTML ="You got C"
        }
        else{
            result.innerHTML ="You got F"
            result.style.color= 'red';
        }



    }

}


input.addEventListener("keyup", gradeCal)




let choose= document.querySelector(".choose")
let output = document.querySelector('.output')

function findOddEvent(e){
    let value = e.target.value
    if(value % 2 == 0){
        output.innerHTML = "Even Num"
        output.style.color= "green";
    } else{
        output.innerHTML = "Odd Num"
        output.style.color="red"
    }
}

choose.addEventListener('keyup', findOddEvent)