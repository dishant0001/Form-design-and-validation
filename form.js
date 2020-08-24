var form = document.querySelector('.forms');
var button = document.querySelector('#submit')
var lname = document.getElementById('lname');
var fname = document.getElementById('fname');
var email = document.getElementById('email');
var pwd = document.getElementById('password');
var cpassword = document.getElementById('cpassword');
var cool = false;

button.addEventListener("click",myfunction);
pwd.addEventListener("keydown",pass_strength);

function myfunction(event){
    validateform();
    if(cool==true)
    button.removeEventListener("click",myfunction);
    else
    event.preventDefault();
}

function validateform(){
    var lnameval = lname.value;
    var fnameval = fname.value;
    var emailval = email.value;
    var passwordval = pwd.value;
    var cpasswordval = cpassword.value;

    cool = true;

    if(fnameval=="")
    {
    cool= false; setInvalid(fname,'PLease enter your first name');}
    else if(fnameval.length<=2||fnameval.length>=20)
    {cool=false; setInvalid(fname,'You exceeded the character limit');}
    else if(/^[a-zA-Z]+$/.test(fnameval)===false)
    {cool=false; setInvalid(fname,"PLease enter a valid first name");}
    else
    setValid(fname);

    if(lnameval=="")
    {cool=false; setInvalid(lname,'PLease enter your last name');}
    else if(lnameval.length<=2||lnameval.length>=20)
    {cool=false; setInvalid(lname,'You exceeded the character limit');}
    else if(/^[a-zA-Z]+$/.test(lnameval)===false)
    {cool=false; setInvalid(lname,"PLease enter a valid last name");}
    else
    setValid(lname);

    if(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(emailval).toLowerCase())===false)
    {cool=false; setInvalid(email,"PLease enter a valid email!");}
    else
    setValid(email);

    if(cpasswordval==""&&passwordval!="")
    {cool=false; setInvalid(cpassword,"Please re-enter your password");}
    else if(cpasswordval=="")
    {cool=false;}
    else if(cpasswordval!=passwordval)
    {cool=false; setInvalid(cpassword,"Your password doesn't match!");}
    else
    setValid(cpassword);
    
    if(passwordval=="")
    {cool=false; setInvalid(pwd,"Please enter a password");document.querySelector('.hid').classList.add("d-none");}
    else if(pass_strength==false)
    {cool=false; setInvalid(pwd,"Enter a stronger password");}
    else
    setValid(pwd);
}

function pass_strength(){
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
        var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
        var enoughRegex = new RegExp("(?=.{6,}).*", "g");
        if (pwd.value.length == 0) {
            pwd.parentElement.querySelector('div').className = 'form-text';
            pwd.parentElement.querySelector('div').innerText = 'Type a Password';
            pwd.className = "form-control is-invalid";
            return false;
        } else if (false == enoughRegex.test(pwd.value)) {
            pwd.parentElement.querySelector('div').className = 'text-danger form-text';
            pwd.parentElement.querySelector('div').innerText = 'Type some more characters';
            pwd.className = "form-control is-invalid";
            return false;
        } else if (strongRegex.test(pwd.value)) {
            pwd.parentElement.querySelector('div').className = 'text-success form-text';
            pwd.parentElement.querySelector('div').innerText = 'Strong!';
            pwd.className = "form-control is-valid";
            return true;
        } else if (mediumRegex.test(pwd.value)) {
            pwd.parentElement.querySelector('div').className = 'ftext-warning form-text';
            pwd.parentElement.querySelector('div').innerText = 'Medium!';
            pwd.className = "form-control is-valid";
            return true;
        } else {
            pwd.parentElement.querySelector('div').className = 'text-danger form-text';
            pwd.parentElement.querySelector('div').innerText = 'Weak!';
            pwd.className = "form-control is-invalid";
            return false;
        }
        document.querySelector('.hid').classList.add("d-none");
}

function setInvalid(el,message){
    el.className = "form-control is-invalid";
        el.parentElement.querySelector('div').className = "invalid-feedback";
    el.parentElement.querySelector('div').innerText= message;
    
}
function setValid(el){
    el.className = "form-control is-valid"
        el.parentElement.querySelector('div').className = "valid-feedback";
        el.parentElement.querySelector('div').innerText= "";
}