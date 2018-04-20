var a;
var hardMode = false;
var k;
var listOfRGB = [];
var score=0;

window.onload  = function() {
    setRGB(hardMode);
    setScore(score);
}

/* FUTURE CODE FOR SCORE TABLE
function askMode() {
    if (confirm("Changing modes will reset your score to 0. Do you wish to continue?"))
        changeMode();
}
*/

function setRGB(mode) {
    if(mode) {
        k = 6;
    }
    else {
        k = 3;
    }

    for (i = 0; i < k; i++) {
        var r = Math.floor(Math.random() * 255);
        var g = Math.floor(Math.random() * 255);
        var b = Math.floor(Math.random() * 255);

        listOfRGB.push([r,g,b]);

        document.getElementById(i).style.background = "rgb(" + r + ", " + g + ", " + b + ")";
    }

   a = listOfRGB[Math.floor((Math.random()*(k-1)))];

   var answer = "rgb(" + a[0] + ", " + a[1] + ", " + a[2] + ")";

   var output = document.getElementById('rgbVal');
    output.textContent = answer;
}

function changeMode() {
    if (document.getElementById('hardMode').checked) {
        hardMode = true;
        document.getElementById('choicesHard').style.display = 'block';
    }
    else {
        hardMode = false;
        document.getElementById('choicesHard').style.display = 'none';
    }
    setRGB(hardMode);
}

function checkRGB(buttonId) {
    var result = document.getElementById('result');
    if (listOfRGB[buttonId].toString() == a.toString()) {
        result.textContent = "Winner winner!";
        setScore(score+=1);
    }
    else {
        result.textContent = "Sorry, wrong answer";
        if (score != 0) {
            score = 0;
            setScore(score);
        }
    }

    correctAnswerAnim(listOfRGB.indexOf(a));
    dim_fast_shine_slow();

    setTimeout(function() {
        listOfRGB = [];
        setRGB(hardMode);
    }, 1500);
}

function dim_fast_shine_slow()
{
    var result = document.getElementById('result');
    result.className  = 'result dim_fast';      
    
    setTimeout(function(){
        result.className = 'resultAnim';
    }, 1000);   // 1 second  
}

function correctAnswerAnim(correctBtn) {
    var btn = document.getElementById(correctBtn);

    btn.classList.add("blinker");

    setTimeout(function(){
        btn.classList.remove("blinker");
    }, 2000);
}

function setScore(num) {
    var scoreOutput = document.getElementById('score');
    scoreOutput.textContent = "SCORE: "+num;
}