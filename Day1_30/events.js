const  button = document.getElementById('btn');
button.addEventListener('mouseenter', ()=>{
   alert("I was clicked ");
   document.querySelector(".box").innerHTML = "<h1>Now i am a Convert into H1 heading tag</h1>"
})

