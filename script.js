


// function gotonextquestion(){

//     document.querySelector(".container").innerHTML =
    
//     `
//         <h2>Simple Quiz</h2>
//         <h3>${currentQuestion+1} ${questions[currentQuestion].question}</h3>
//         <div class="options">
//             ${options()}
//         </div>
//         <button class="next" onclick = "gotonextquestion()">Next</button>

//     `;

//     currentQuestion++;
//     addEvent();
//     if(currentQuestion >= questions.length)displayScore();
// }



// function displayScore()
// {
//     document.querySelector(".container").innerHTML = `
     
//       <h1>Correct : ${correct} , Wrong : ${questions.length-correct} </h1>

//       <button class = "startQuiz" onclick = "gotonextquestion()">Start Again</button>
    
//     `
//     currentQuestion =0;
// }

// function addEvent()
// {
    
       
//         document.querySelector(".options").addEventListener("click",(e)=>{

//         document.querySelector(".correctclass").style.backgroundColor = "green";
            
//         if(e.target.classList[0] === "opti"){
//             e.target.style.backgroundColor = "red";
//         }
//         else{
//             correct++;
//         }
//     });
    
// }

// function appendNextButton()
// {
//     let newElement = getNextButton();

    
//     if(newElement)
//         {
//            let parentEle = document.querySelector(".options");
            
//             parentEle.appendChild(newElement);
//         }
//         else{
//             console.log("no elements inserted");
//         }
        
//         console.log(newElement);

//     activateNextButton();
// }

//-----------------------------------------------------------------

// let green = false;
// function activateNextButton()
// {
//     document.addEventListener("click",()=>{
//        generatOptions();  
//     })
// }

// function hideCorrectOption()
// {
   
// }




// function generatOptions()
// {
     
//     let div = document.querySelector(".options");

//     let optionArray = questions[currentQuestion].answer; 

//      optionArray.forEach((element)=>{
//         let inputTag = document.createElement("input");
//         if(element.correct)
//         {
//              inputTag.type = "text";
//              inputTag.readOnly = true;
//              inputTag.value = element.opt;
//              inputTag.className = "correctclass";
//              inputTag.id = "unchecked";
//         }
//         else{

//             inputTag.type = "text";
//             inputTag.readOnly = true;
//             inputTag.value = element.opt;
//             inputTag.className = "wrongclass";
//             inputTag.id = "unchecked";
//         }
//         div.appendChild(inputTag);

//     })
// }





// function highlightCorrectOption()
// {
//         document.querySelector(".correctclass").style.backgroundColor="green";
// }


let currentQuestion = 0;
let correct = 0;

function displayScore()
{
   let div = document.querySelector(".quiz");
   div.innerHTML = ``;
   let button = document.createElement("button");
   let h3     = document.createElement("h3");
   h3.innerHTML = `Correct : ${correct} , Incorrect : ${questions.length-correct}`;
   button.className = "startQuiz";
   button.innerHTML = "Start Again";

   div.appendChild(h3);
   div.appendChild(button);
   document.querySelector(".score").innerHTML = `Score : 0/4`;
   correct=0;
   button.addEventListener("click",displayQuestion);


}

function getNextButton()
{
    let newElement = document.createElement("button");

    newElement.classList.add("next");

    newElement.textContent = 'Next';

    return newElement;
}


let dostuff = function(e)
{ 
        let button = getNextButton();
        let score = document.querySelector(".score");
        e.target.parentElement.appendChild(button);

        if(e.target.classList[0] != "options")
        {
          if(e.target.classList[0] == "correctclass")
          {
             e.target.style.color = "#7bfa05"
             e.target.style.border = "1px solid #7bfa05"
             correct++;
             score.innerHTML = `Score: ${correct}/4`;
          }
          else{
             e.target.style.color = "#fa4605";
             e.target.style.border = "1px solid #fa4605";

             document.querySelectorAll("input").forEach((ele)=>{
                 if(ele.classList[0]=="correctclass")
                 {
                     ele.style.color =  "#7bfa05";
                     ele.style.border = "1px solid #7bfa05";
                 }
             })
          }

          document.querySelectorAll("input").forEach((ele)=>{
             ele.setAttribute("id","checked");
          }) 
          
          document.querySelector(".options").removeEventListener("click",dostuff);
        }

        button.addEventListener("click",displayQuestion);

}


function afterClickedOnOptions()
{
    let optionDiv = document.querySelector(".options");
    optionDiv.addEventListener("click",dostuff)    
}


function displayQuestion()
{
    if(currentQuestion >= questions.length)
    {
        currentQuestion=0;
        displayScore();
    }
    else{
        let container = document.querySelector(".quiz");
        container.innerHTML = ``;
      
        let h3 = document.createElement("h3");
        h3.innerHTML = (currentQuestion+1)+". " + questions[currentQuestion].question;
      
        let div = document.createElement("div");
        div.className = "options";
       
          container.appendChild(h3);
      
          container.appendChild(div);
         
          generatOptions();
      
          currentQuestion++;
      
          
          afterClickedOnOptions();
    }
    
}

function generatOptions()
{
    let div  = document.querySelector(".options");

    let optionArray = questions[currentQuestion].answer; 

    optionArray.forEach((element)=>{
        let inputTag = document.createElement("input");
        if(element.correct)
        {
             inputTag.type = "text";
             inputTag.readOnly = true;
             inputTag.value = element.opt;
             inputTag.className = "correctclass";
             inputTag.id = "unchecked";
        }
        else{

            inputTag.type = "text";
            inputTag.readOnly = true;
            inputTag.value = element.opt;
            inputTag.className = "wrongclass";
            inputTag.id = "unchecked";
        }
        div.appendChild(inputTag);
    })
}