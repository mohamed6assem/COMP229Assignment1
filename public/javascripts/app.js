//Javascript for Assignment1 COMP229 Summer 2022 - By Mohamed Assem - 301163010 - June 6, 2022
//captureContactInfo function captures all information on contact me page and is activated by clicking
//submit button.
function captureContactInfo() {
    var emailInput = document.getElementById("inputEmail");
    var nameInput = document.getElementById("inputName");
    var phoneInput = document.getElementById("inputPhone");
    var subjectInput = document.getElementById("inputSubject");
    var messsageInput = document.getElementById("txtMessage");
    
}

var submit = document.getElementsByClassName("btn btn-primary mb-2");

    submit.addEventListener("click", captureContactInfo, false);


