/*
Have a shape on the screen V
Shape disappears when clicked V
When the shape is clicked, it reappears after 3 seconds V
Measure time between shape appearing and being clicked V
Otuput that time V

Random location on screen V
Random shape V
Random color V
Random appearance time V
Time shown in paragraph
Black backgorund
White words
*/

var start;
var clicked;

window.onload = appear();
var bestTime = 100;

function disappear(){
    document.getElementById('box').style.display='none';
    clicked= Date.now();
    var reactionTime = (clicked-start)/1000;
    if (bestTime > reactionTime) {
        bestTime = reactionTime;
    }
    //alert(reactionTime+' seconds');
    document.getElementById('time').innerHTML='Your reaction time is: '+reactionTime;
    document.getElementById('best').innerHTML='Best score: '+bestTime;
    var randomDelay = ((Math.random()*3)+0)*1000;
    setTimeout(appear, randomDelay);
}

function appear(){
    var randomTop = Math.random()*589;
    var randomLeft = Math.random()*1712;
    //var randomTop = 589;
    //var randomLeft = 1712;
    var randomHeight = (Math.random()*190)+10;
    var randomWidth = (Math.random()*190)+10;
    var randomCurve = Math.random();
    var randomColor = '#'+((1<<24)*Math.random()|0).toString(16);
    if (randomCurve < 0.5) {
        document.getElementById('box').style.borderRadius=40+'px';
    } else {
        document.getElementById('box').style.borderRadius=0+'px';
    }
    document.getElementById('box').style.top= randomTop+'px';
    document.getElementById('box').style.left= randomLeft+'px';
    document.getElementById('box').style.height= randomHeight+'px';
    document.getElementById('box').style.width= randomWidth+'px';
    document.getElementById('box').style.display='block';
    document.getElementById('box').style.backgroundColor=randomColor;
    start= Date.now();
}

