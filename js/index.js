const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const msg = document.getElementById('msg');

form.addEventListener("submit", (e) =>{
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const msgValue = msg.value;

    if (usernameValue === ''){
        setErrorFor(username, "campo obrigatório")
    } else {
        setSuccessFor(username);
    }

    if (emailValue === ''){
        setErrorFor(email, "campo obrigatório")
    } else if (!checkEmail(emailValue)) {
        setErrorFor(email, "insira um email válido.")
    } else {
        setSuccessFor(email)
    }

    if (phoneValue === ''){
        setErrorFor(phone, "campo obrigatório")
    } else if (!checkPhoneNumber(phoneValue)){
        setErrorFor(phone, "insira um número de telefone válido.")
    } else {
        setSuccessFor(phone);
    }

    if (msgValue === ''){
        setErrorFor(msg, "campo obrigatório")
    } else {
        setSuccessFor(msg);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    );
}

function checkPhoneNumber(phoneNumber) {
    const phoneRegex = /^(?:\+?\d{1,3}[-.\s]?)?(?:\(?\d{2,3}\)?[-.\s]?)?\d{4,5}[-.\s]?\d{4}$/;
    return phoneRegex.test(phoneNumber);
}