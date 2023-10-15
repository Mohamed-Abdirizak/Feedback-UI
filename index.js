// console.log("hello")


// let chosen = null;

// const u=()=>{
//     chosen = "unhappy";
//     console.log("unhappy")
// }
// const n=()=>{
//     chosen = "neutral";
//     // console.log("")
// }
// const s=()=>{
//     chosen = "satified";
  
// }
// console.log(chosen);

const mainEl  = document.querySelectorAll(".one");
const containerEl = document.getElementById('container');
let selectedRating = "";
const btnEl = document.getElementById("btn");
    // console.log('sedfd')
   mainEl.forEach((mainFun) =>{
    mainFun.addEventListener("click", (event) =>{
        removeActive();
        selectedRating = event.target.innerText || event.target.parentNode.innerText;
        // console.log(event.target.innerText || event.target.parentNode.innerText)
 
        event.target.classList.add("ac")
     event.target.parentNode.classList.add("ac")
    })
    
})

btnEl.addEventListener("click", ()=>{
    if (selectedRating !== "")
    {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>

        <br>
        <br>
        <strong>Feedback: ${selectedRating} </strong>
        
        <p>We'll use your feedback to imporve our customer support.
        
        `

    }
    // else{
    //     console.log("nothing is chosedn")
    // }
    
})


function removeActive()
{
    mainEl.forEach((mianFun)=>{
        mianFun.classList.remove("ac")
    })
}


 


