function soundplayer(keypressed)
{
    switch (keypressed) {
        case "w":
        var s1=new Audio("sounds/tom-1.mp3");
        s1.play();
        case "a":
        var s1=new Audio("sounds/tom-2.mp3");
        s1.play();
        case "s":
        var s1=new Audio("sounds/tom-3.mp3");
        s1.play();
        case "d":
        var s1=new Audio("sounds/tom-4.mp3");
        s1.play();
        case "j":
        var s1=new Audio("sounds/crash.mp3");
        s1.play();
        case "k":
        var s1=new Audio("sounds/kick-bass.mp3");
        s1.play();
        case "l":
        var s1=new Audio("sounds/snare.mp3");
        s1.play();
        break;
        default:
        alert("Invalid key pressed");
            break;
    }
}
function afterpress(keypressed){
 document.querySelector("."+keypressed).classList.add("pressed");
 setTimeout(() => {
    document.querySelector("."+keypressed).classList.remove("pressed");
 }, 100);
}

for(var i=0;i<document.querySelectorAll("button").length;i++)
{
   document.querySelectorAll("button")[i].addEventListener("click",function(){
    var key=this.innerHTML;
    soundplayer(key);
    afterpress(key);
   })
}
document.addEventListener("keypress",function(event){
    soundplayer(event.key);
    afterpress(event.key);
})