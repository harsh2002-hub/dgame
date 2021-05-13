var n1=Math.floor(6*Math.random())+1;
var n2=Math.floor(6*Math.random())+1;

function cal1(x){
  if(x==6){
    document.querySelector(".img1").setAttribute("src","dice6.png");
  }
  else if(x==5){
    document.querySelector(".img1").setAttribute("src","dice5.png");
  }
  else if(x==4){
    document.querySelector(".img1").setAttribute("src","dice4.png");
  }
  else if(x==3){
    document.querySelector(".img1").setAttribute("src","dice3.png");
  }
  else if(x==2){
    document.querySelector(".img1").setAttribute("src","dice2.png");
  }
  else if(x==1){
    document.querySelector(".img1").setAttribute("src","dice1.png");
  }
}
function cal2(x){
  if(x==6){
    document.querySelector(".img2").setAttribute("src","dice6.png");
  }
  else if(x==5){
    document.querySelector(".img2").setAttribute("src","dice5.png");
  }
  else if(x==4){
    document.querySelector(".img2").setAttribute("src","dice4.png");
  }
  else if(x==3){
    document.querySelector(".img2").setAttribute("src","dice3.png");
  }
  else if(x==2){
    document.querySelector(".img2").setAttribute("src","dice2.png");
  }
  else if(x==1){
    document.querySelector(".img2").setAttribute("src","dice1.png");
  }
}
if(n1>n2){
  document.querySelector("h1").innerHTML=" <i class='fab fa-font-awesome-flag'></i> Player 1 WINS";
  cal1(n1);
  cal2(n2);
}
else if(n1<n2){
  document.querySelector("h1").innerHTML="<i class='fab fa-font-awesome-flag'></i> Player 2 WINS";
  cal1(n1);
  cal2(n2);
}
else{
  document.querySelector("h1").innerHTML="Draw";
  cal1(n1);
  cal2(n2);
}
