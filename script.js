const nameInput = document.querySelector("#name");
const message = document.querySelector("#message");
const email = document.querySelector("#email");
const confirmEmail= document.querySelector("#confirmemail");
const phonenumber = document.querySelector("#phonenumber");
const date = document.querySelector("#date");
const time = document.querySelector("#duration");
const errorNodes = document.querySelectorAll(".error");



//Validate data
function  validateForm(){  
let isFormValid = true;
clearForm();
    
if(nameInput.value.length<6){
    errorNodes[0].innerText="Name has to be at least 6 characters";
    nameInput.classList.add("error-border");
    isFormValid = false;
}
else if(nameInput.value>6){
    nameInput.classList.add("success");
}
if(message.value.length<1){
    errorNodes[1].innerText="Message cannot be left blank";
    message.classList.add("error-border");
    isFormValid = false;
}
if(!validEmail(email.value)){
    errorNodes[2].innerText="Email has to be valid";
    email.classList.add("error-border");
    isFormValid = false;
    
}
if(confirmEmail.value!== email.value){
    errorNodes[3].innerText="Your email has to macth the email above";
    confirmEmail.classList.add("error-border");
    isFormValid = false;
}
if(phonenumber.value.length>11 || phonenumber.value.length<11){
    errorNodes[4].innerText="Your phone number had to be exactly 11 characters";
    phonenumber.classList.add("error-border");
    isFormValid = false;
}
if(date.value < currentDate()){
    errorNodes[5].innerText="Pick a valid date";
    date.classList.add("error-border");
    isFormValid = false;
}
if(time.value<1){
    errorNodes[6].innerText="Duration must be included";
    time.classList.add("error-border");
    isFormValid = false;
}
if(isFormValid){
    let n1 = document.getElementById("name").value;
    let n2 = document.getElementById("email").value;
    let n3 = document.getElementById("phonenumber").value;
    let n4 = document.getElementById("date").value;
    let n5 = document.getElementById("duration").value;
    alert("Name:"+n1+"\nEmail:"+n2+"\nPhone number:"+n3+"\nAppointment date:"+n4+"\nDuration:"+n5+"\n\nTo 210057917@aston.ac.uk");
    }
}




//Clear error/ success messages
function clearForm(){
   for(let i=0;i<errorNodes.length;i++){
       errorNodes[i].innerText="";
   } 
nameInput.classList.remove("error-border");
message.classList.remove("error-border");
email.classList.remove("error-border");
confirmEmail.classList.remove("error-border");
phonenumber.classList.remove("error-border");
date.classList.remove("error-border");
time.classList.remove("error-border");

}
//Check for Valid email
function validEmail(email){
    let format = /\S+@\S+\.\S+/;
    return format.test(email);
}  

//Check current Date
function currentDate(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2,'0');
    let mm = String(today.getMonth()+1).padStart(2,'0');
    let yyyy = today.getFullYear();
    let pattern = yyyy+'-'+mm+'-'+dd;
    return pattern;
}

//Scroll up btn
const scrollUpButton = document.getElementById('scrollUpButton');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollUpButton.style.display = 'block';
    } else {
        scrollUpButton.style.display = 'none';
    }
};

scrollUpButton.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
