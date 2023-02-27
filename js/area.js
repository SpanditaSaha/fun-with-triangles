const inputSides = document.querySelectorAll(".ip-side");
const areaBtn = document.querySelector("#area-btn");
const showOutput = document.querySelector("#show-output");


function calArea()
{
    const area = (1/2)*(Number(inputSides[0].value))*(Number(inputSides[1].value));

    showOutput.innerText = "The area is : "+area+" cm^2";
}

areaBtn.addEventListener("click",calArea);