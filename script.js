const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    document.body.style.background = randomBg();
});

function randomBg(){
    return `hsl(${Math.floor(Math.random() * 360)}, 50%, 70%)`;
}