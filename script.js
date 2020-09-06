window.onload = function(){

var randBtn = document.getElementById("randomize");
randBtn.addEventListener("click", () => {randomize()} );


function randomize() {
    for (let i = 0; i < 101; i++) {
        let height = Math.floor(Math.random()*100);
        let barId = "bar"+i;
        let  bar = document.getElementById(barId);
        bar.style.height = height+"%";        
    }
}


}