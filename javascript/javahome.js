const button = document.getElementById('btn');
const content = document.getElementById('aboutButton')

button.addEventListener("click", function () {

    content.style.display = (aboutButton.dataset.button ^= 1) ? "block" : "none";

})





let fName = document.querySelector("#fName")
function send() {
    console.log(fullName.value);
    console.log(tel.value);
    console.log(mail.value);
    console.log(comments.value);
}

function phonenumber(inputtxt) {
    let phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if ((inputtxt.value.match(phoneno))) {
        return true;
    }
    else {
        alert("Not a valid Phone Number");
        return false;
    }
}
