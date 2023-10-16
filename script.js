let random = Math.floor(Math.random()*3);
let con = document.querySelectorAll('.con');
let computer = document.querySelectorAll('.computer');
let winDisplay = document.querySelector(".win-display");
let winner = document.querySelector(".win");
let aganist = document.querySelector('.aganist');
let user= document.querySelector(".user");
let comp= document.querySelector(".comp");
let triangle = document.querySelector('.triangle');
let cancel = document.querySelector(".cancel-btn");
let rulesspan = document.querySelector(".rules-span")
let rulesbtn = document.querySelector('.rules-btn');
let playAgain = document.querySelector('.play');


// let savedps=JSON.parse(localStorage.getItem("playerscore"));
// let savedcs=JSON.parse(localStorage.getItem("compscore"));
 
let playerScore = 0;
let computerScore =0;
let cs = document.querySelector(".cs");
let ys = document.querySelector(".ys");

// if(savedps){
//     ps.innerText=savedps

// }
// if(savedcs){
//     cs.innerText=savedcs

// }




con.forEach((element,index)=>{
    element.addEventListener('click',()=>{
        user.style.opacity="1";
        triangle.style.display ="none";
        con.forEach(item=>{
            item.style.display="none";
        })
          element.style.display="block"
          element.classList.add("highlight")
          setTimeout(()=>{
            comp.style.opacity="1"
            setTimeout(()=>{
                con[random].style.display="block";
                con[random].classList.add("right");
            },1000);
            setTimeout(()=>{
                if(index === 0 && random === 1||index ===1 && random ===2|| index ===2 && random ===0){
                    winDisplay.style.display="grid";
                    // console.log(playerScore);
                    playerScore++;
                    // playerScore++;

                      
                    localStorage.setItem("yourscore",JSON.stringify(playerScore));
                    let savedScores=localStorage.getItem("yourscore");
                    
                    // console.log(savedScores)
                    
                        let parsedScore =JSON.parse(savedScores);
                    
                    ys.innerText=parsedScore;
                    winner.innerText="You Win"
                }
                else if(index===random){
                    winDisplay.style.display="grid";
                    winner.innerText="TIE UP";
                    aganist.style.display="none";

                    
                }
                else{
                    winDisplay.style.display="grid"
                    winner.innerText="You Loose"
                    computerScore++;
                    cs.innerText=computerScore;
                    localStorage.setItem("compscore","computerScore");


                }
            },1500);
          },500);
    })
   
})



rulesbtn.addEventListener('click',()=>{
    if(rulesspan.style.display==="none"){
        rulesspan.style.display="block";
    }
    else{
        rulesspan.style.display="none";
    }
})
cancel.addEventListener('click',()=>{
    rulesspan.style.display="none";
})
playAgain.addEventListener('click',()=>{
    window.location.reload();
})


