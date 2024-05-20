var rnm1=Math.floor(Math.random()*6)+1;
var img1="dice"+rnm1+".png";
var imgsrc1="images/"+img1;

var y=document.getElementsByClassName("img1")[0];
y.setAttribute('src',imgsrc1);

var rnm2=Math.floor(Math.random()*6)+1;
var img2="dice"+rnm2+".png";
var imgsrc2="images/"+img2;

var z=document.getElementsByClassName("img2")[0];
z.setAttribute('src',imgsrc2);

if(rnm1>rnm2){
    document.getElementsByTagName('h1')[0].innerHTML="Player 1 Wins."
}
else if(rnm1<rnm2){
    document.getElementsByTagName('h1')[0].innerHTML="Player 2 Wins."
}
else{
    document.getElementsByTagName('h1')[0].innerHTML="Draw"
}