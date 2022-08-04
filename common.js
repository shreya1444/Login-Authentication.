const loginForm=document.querySelector("form.login");
    const signupForm=document.querySelector("form.signup");
    const loginBtn=document.querySelector("label.login");
    const signupBtn=document.querySelector("label.signup");
    const signupLink=document.querySelector(".signup-link a");
    const signinLink=document.querySelector(".signin-link a");
    const loginText=document.querySelector(".title-text .login");
    const signupText=document.querySelector(".title-text .signup");
    signupBtn.onclick=(()=>{
        loginForm.style.marginLeft="-50%";
        loginText.style.marginLeft="-50%";
    });
    loginBtn.onclick=(()=>{
        loginForm.style.marginLeft="0%";
        loginText.style.marginLeft="0%";
    });
    signupLink.onclick=(()=>{
        signupBtn.click();
        return false;
       
    });

    signinLink.onclick=(()=>{
        loginBtn.click();
        return false;
    });

const email = document.getElementById('einput1');
email.addEventListener('blur', () => {
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        var email1 = document.getElementById('einput1').value;

        //store email in sessionStorage------------------------------------------------------------

        sessionStorage.setItem("Email", email1);
        console.log(email1);
    }
    else {
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
    }
});
const passw = document.getElementById('pinput1');
passw.addEventListener('blur', () => {
    let regex = /^([A-Za-z]+)@([0-9]){2,10}$/;
    let str = passw.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('Your pass is valid');
        passw.classList.remove('is-invalid');
        var pass1 = document.getElementById('pinput1').value;

        //store password in sessionStorage-------------------------------------------------------------------
        sessionStorage.setItem("Pass1", pass1);
    }
    else {
        console.log('Your pass is not valid');
        passw.classList.add('is-invalid');
    }
});


//signup----------------------------------------------------------------------------------------------------------------------

function myFun1() {
    var temp11 = sessionStorage.getItem("Email");
    var temp22 = sessionStorage.getItem("Pass1");
    var pass2 = document.getElementById('cpinput1').value;
    var myemail = document.getElementById("einput1").value;
    if (temp22 == pass2 && temp22 != "" && pass2 != "" && temp11 != null && temp22 != " " && pass2 != " " && temp11 != " ") {
        document.getElementById("output").style.color = "lightgreen";
        document.getElementById("output").innerHTML = "you! successfully signup.";
        sessionStorage.setItem("Cpass", pass2);

       

        document.getElementById("form").reset();
    }
    
    else if (myemail == "" || pass2 == "") {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "fill all field..";
    }
    else if (pass2 != temp22) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "invalid password..";
    }
    else if (temp11 == null) {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "Email not valid..";
    }
    else if (temp11 == " " || temp11 == "") {
        document.getElementById("output").style.color = "red";
        document.getElementById("output").innerHTML = "please enter your email..";
    }
};

//login-------------------------------------------------------------------------------------------------------------------


function myFun() {
    var email2 = document.getElementById('einput').value;
    var pass3 = document.getElementById('pinput').value;
    var temp1 = sessionStorage.getItem("Email");

    // var temp2 = sessionStorage.getItem("Pass1");

    var temp2 = sessionStorage.getItem("Cpass");

   

    if (temp1 != email2 || temp2 != pass3) {

        //location.replace("Resume-Index.html")

        document.getElementById("output2").style.color = "red";
        document.getElementById("output2").innerHTML = "Invalid User Data..";
        document.querySelector("form").reset();
    }
   
    if (email2 == "" || email2 == " " || pass3 == "" || pass3 == " ") {
        document.getElementById("output2").style.color = "red";
        document.getElementById("output2").innerHTML = "Enter valid data..";
        document.querySelector("form").reset();
    }

    if (temp1 == email2 && temp2 == pass3) {
        location.replace("resumeindex.html")
    }
   
};
var form = document.getElementById('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    
});

