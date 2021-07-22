
function phonenumber(inputtxt) {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
        return true;
    }
    else {
        alert("Not a valid 10 digit Phone Number");
        return false;
    }
}


function ValidateEmail(inputText) {
    let mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (inputText.value.match(mailformat)) {
        return true;
    }
    else {
        alert("You have entered an invalid email address!");
        document.form1.email.focus();
        return false;
    }
}


const button = document.getElementById('btn');
const content = document.getElementById('aboutButton')

button.addEventListener("click", function () {

    content.style.display = (aboutButton.dataset.button ^= 1) ? "block" : "none";

})

let form = document.querySelector("formData")
function send() {
    console.log(fullName.value);
    console.log(tel.value);
    console.log(mail.value);
    console.log(comments.value);
}
