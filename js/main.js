const elForm = document.getElementById("form");
const elInput = document.getElementById("input");
const elBtn = document.getElementById("button");
const elBox = document.getElementById("box");

elForm.addEventListener("submit", (e)=>{
  e.preventDefault();
  let span = document.createElement("span");
  span.className = `circle`;
  span.textContent = elInput.value;
  let count = elInput.value;
  setInterval(() =>{
    setTimeout(() =>{
      count--;
      span.textContent = count;
      if(count == 0) {
        span.style.display = "none";
      }
    })
  }, 1000)

  if(count == 0){
    alert("Sorry you need input number");
    span.style.display = "none";
  }
  
  elBox.appendChild(span);
  elInput.value = "";
});


