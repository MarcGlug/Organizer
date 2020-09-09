window.onload = function(){

var heights = [];

var randBtn = document.getElementById("randomize");
randBtn.addEventListener("click", randomize);

var insBtn = document.getElementById("insertion");
insBtn.addEventListener("click", insertion );

var bubbleBtn = document.getElementById("bubble");
bubbleBtn.addEventListener("click", bubble );

var quickBtn = document.getElementById("quick");
quickBtn.addEventListener("click", quick );

// --------------- ALGORIGHTMS -------------------

async function insertion() {
    for ( let i = 1; i < heights.length; i++){
        for ( let j = i; j > 0; j--){
            if( heights[j] < heights[j-1]){
                [heights[j-1], heights[j]] = [heights[j], heights[j-1]];
            }else{
                break;
            }
            draw(heights);
            await visualization(1);
        }
    }
}

async function bubble(){
    for (let i = heights.length; i > 0; i--){
        for (let j = 0; j < i; j++){
            if(heights[j] > heights[j+1]){
                [heights[j], heights[j+1]] = [heights[j+1], heights[j]];
            }
            draw(heights);
            await visualization(1);
        }
    }
}

async function quick(){
    alert("Not working yet");
}

// ------------------ OTHERS -----------------------

function randomize() {
    heights = [];
    for (let i = 0; i < 100; i++) {
        let height = Math.ceil(Math.random()*100);
        heights.push(height);
              
    }
    draw(heights);
    
}

function draw(arr){
    for (let i = 0; i < arr.length; i++) {
        let barId = "bar"+i;
        let h = arr[i];
        let  bar = document.getElementById(barId);
        bar.style.height = h+"%";
    }
}

function visualization(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}




}
