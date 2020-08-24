var form = document.querySelector('.forms');
var button = document.querySelector('#submit')
var pnumber = document.getElementById('pnumber');
var answer = document.getElementById('answer');
var username = document.getElementById('username');
var question = document.getElementById('secques');
var gender = document.getElementById('gender');
var day = document.getElementById('day');
var month = document.getElementById('month');
var year = document.getElementById('year');
var cool = false;
var aler = document.getElementById('alert');

button.addEventListener("click",myfunction);

function myfunction(event){
    validateform();
    if(cool==true)
    button.removeEventListener("click",myfunction);
    else
    event.preventDefault();
}

function validateform(){
    var pnumberval = pnumber.value;
    var usernameval = username.value;
    var answerval = answer.value;
    var genderval = gender.value;
    var questionval=question.value;
    var dayval = day.value;
    var monthval = month.value;
    var yearval = year.value

    cool = true;

    if(isNaN(pnumberval)==true)
    {cool=false; setInvalid(pnumber,"PLease enter a number!")}
    else if(pnumberval.length==0)
    {pnumber.className="form-control"; 
    pnumber.parentElement.querySelector('div').className = "";
    pnumber.parentElement.querySelector('div').innerText= "";}
    else if(pnumberval.length!=10)
    {cool=false; setInvalid(pnumber,"PLease enter a valid 10 digit number");}
    else
    setValid(pnumber);

    if(usernameval.length==6||usernameval.length==30)
    {cool=false; setInvalid(username,"Please enter a length between 6 and 30");}
    else if(/^[a-zA-Z0-9\-\_]+$/.test(usernameval)===false)
    {cool=false; setInvalid(username,"Please enter a valid username");}
    else
    setValid(username);

    if (genderval=="")
    {cool=false; setInvalid(gender,"Please select your gender");}
    else
    setValid(gender);

    if(questionval=="")
    {cool=false; setInvalid(question,"Please select a security question!");}
    else if(answerval=="")
    {cool=false; setInvalid(question,"Please type an answer to your security question!");}
    else
    setValid(question);

    if(isNaN(dayval)==true||isNaN(yearval==true))
    {cool=false; setDateInvalid("Please enter a valid date!")}
    else if(monthval==""||dayval==""||yearval=="")
    {cool=false; setDateInvalid("Please fill in a complete birthday!");}
    else if((dayval<1||dayval>31)||(yearval<=1910||yearval>2020))
    {cool=false; setDateInvalid("Please enter a valid date")}
    else
    setDateValid();
}

function setDateInvalid(message){
    day.className = "form-control is-invalid";
    month.className = "form-control is-invalid";
    year.className = "form-control is-invalid";    
    aler.innerText = message;
}
function setDateValid(){
    day.className = "form-control is-valid";
    month.className = "form-control is-valid";
    year.className = "form-control is-valid";    
    aler.innerText = "";
}

function setInvalid(el,message){
    el.className = "form-control is-invalid";
    if(el==question)
    {   answer.className="form-control is-invalid"
        el.parentElement.querySelectorAll('div')[1].innerText= message;
        el.parentElement.querySelectorAll('div')[1].className = "invalid-feedback";}
    else{
        el.parentElement.querySelector('div').className = "invalid-feedback";
    el.parentElement.querySelector('div').innerText= message;
    }
}
function setValid(el){
    el.className = "form-control is-valid"
    if(el==question){
        answer.className="form-control is-valid";
        el.parentElement.querySelectorAll('div')[1].className = "invalid-feedback";
        el.parentElement.querySelectorAll('div')[1].innerText= "";}
    else
    {el.parentElement.querySelector('div').className = "valid-feedback";
    el.parentElement.querySelector('div').innerText= "";}
}