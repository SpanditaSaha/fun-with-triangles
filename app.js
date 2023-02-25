const inputAngle = document.querySelectorAll(".angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputDiv = document.querySelector(".output-div");

function calAngleSum()
{
    let sum=0;
    for(let i=0;i<inputAngle.length;i++)
    {
        sum = sum + Number(inputAngle[i].value);
    }

    return sum;
}

function compareAngleSum()
{
    const angleSum = calAngleSum();

    if(angleSum===180)
    {
        outputDiv.innerText = "Hey! This is a Triangle.";
    }
    else{
        outputDiv.innerText = "Oops! This is not a Triangle.";

    }

}

function isThisATriangle()
{
    calAngleSum();
    compareAngleSum();
}


isTriangleBtn.addEventListener("click",isThisATriangle);