const inputSide = document.querySelectorAll(".input-side");
const calBtn = document.querySelector("#cal-btn");
const otpAns = document.querySelector("#otp-ans");

function calculateSumOfSquares()
{
    let valueSquare = 0;
    for(let i=0;i<inputSide.length;i++)
    {
        let value = Number(inputSide[i].value);
        valueSquare = valueSquare+(value*value);
    }

    return valueSquare;
}

function calculationHypo()
{
    const val = calculateSumOfSquares();
    let hypo = Math.sqrt(val);
    otpAns.innerText = "The Hypotenuse is : "+hypo;
}

calBtn.addEventListener("click",calculationHypo);