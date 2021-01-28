
var gender=prompt("What is the gender of your son?");
var remainder;

if(gender=="boy"){
    remainder="We have interesting lego toys";
}else if(gender=="girl"){
   remainder="we have a lovely drawing toys";
}
var age=prompt("how old is your son?");

var message;

if(age==3){
    message="Choose big and soft toys";
}else if(age=>4){
    message="Choose educational toys";
}
document.write(remainder);
document.write(message)

confirm("Do you like our services?");
alert("have a nice day");
