const quizForm = document.querySelector(".quiz-form");
const submitBtn = document.querySelector("#submit-btn");
const outputDiv = document.querySelector("#output-div");

const rightAnswers = ["90°","right angled"];

function checkAnswers()
{
    let i=0;
    let score=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values())
    {
        if(value === rightAnswers[i])
        {
            score=score+1;
            
        }
        i=i+1;       
    }

    outputDiv.innerText = "Your score is : "+score;
}


submitBtn.addEventListener("click", checkAnswers);