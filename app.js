var gender=prompt("What is the gender of your child?");
var remainder;

if(gender=="boy"){
    remainder="We have interesting lego toys";
}else if(gender=="girl"){
   remainder="we have a lovely drawing toys";
}


var age=prompt("how old is your child?");

var message;

if(age==3){
    message="Choose big and soft toys";
}else if(age=>4){
    message="Choose educational toys";
}

document.write(remainder);
document.write(message);

var toy = prompt("what toy do you want ball or dall?");
while (toy !=="ball" && toy !== "dall") {
    toy = prompt("what toy do you want ball or dall?");
}

var toyKind="";
if (toy==="ball"){
toyKind="<img src ='images/ball.png'/>";
}else if (toy==="dall"){
toyKind = "<img src ='images/dall.jpg'/>";
}

var notoys = prompt("how many toy you want");

var result ="";
for ( var i=0 ; i<notoys ; i++){
    result = result + toyKind;
}
document.write(result);
confirm("Do you like our services?");
alert("have a nice day");


