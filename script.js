const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();

    var firstName = firstname.value.trim();
    var lastName = lastname.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (firstName === '') {
        errorFunc(firstname, 'First Name cannot be empty');
    } else {
        successFunc(firstname);
    }
    if (lastName === '') {
        errorFunc(lastname, 'Last Name cannot be empty');
    } else {
        successFunc(lastname);
    }
    if (emailValue === '') {
        errorFunc(email, 'Email cannot be empty');
    }else if(!emailValue.match(pattern)) {
        errorFunc(email, 'Looks like this is not an email');
    } 
    else {
        successFunc(email);
    }
    if (passwordValue === '') {
        errorFunc(password, 'Password cannot be empty');
    } else {
        successFunc(password);
    }
});

function errorFunc(req, message) {
    const formControl = req.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    req.classList.add('error');
    small.classList.add('error-text');
    if(req.id !== 'email') {
        req.value= "";
    }else{
        req.style.color = "hsl(0, 100%, 74%)";
    }
}

function successFunc(req) {
    req.classList.remove('error');
    req.classList.remove('error-text');
    req.classList.add('success');
}