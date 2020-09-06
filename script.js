window.onload = function(){

var randBtn = document.getElementById("randomize");
randBtn.addEventListener("click", () => {randomize()} );

var orgBtn = document.getElementById("organize");
orgBtn.addEventListener("click", () => {organize()} );


function randomize() {
    for (let i = 0; i < 101; i++) {
        let height = Math.floor(Math.random()*100);
        let barId = "bar"+i;
        let  bar = document.getElementById(barId);
        bar.style.height = height+"%";        
    }
}

function organize() {
    alert("Sorting isn't ready yet");
}

}