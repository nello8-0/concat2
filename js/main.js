const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});

// validate-sign-in-form '

const form = document.getElementById('form')

const user = document.getElementById('user')
const pass = document.getElementById("password");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInput();
})  

function checkInput() {
    // get the values from the inputs
    const userValue = user.value.trim();
    const passValue = pass.value.trim();

    if (userValue === "") {
        // show error
        // add error class
        setErrorFor(user, ' This field can not be empty');
    } else {
        //add  success class
        setSuccessFor(user);
    }

    if (passValue.length < 6  || passValue.length > 10) {
        setErrorFor(pass , 'Your pass sould be between 6 and 20 char')
    } else {
        setSuccessFor(pass)
    }
}

function setErrorFor(input, message) {
    const input_field = input.parentElement; // .input-field
    const small = input_field.querySelector('small')

    // add error message inside small 
    small.innerText = message

    //add error class

    input_field.className = 'input-field error'
}

function setSuccessFor(input) {
    const input_field = input.parentElement;
    input_field.className = 'input-field success'

}


// form sign up

const form2 = document.getElementById("signIn");
const nameuser = document.getElementById("name");
const password = document.getElementById("pass")
const phone = document.getElementById("phone");
const age = document.getElementById("age")
const email = document.getElementById("email")
const confirmPass = document.getElementById("confirmPass");
const gender = document.getElementById("gender")
const career = document.getElementById("career")




form2.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
}) 


function checkInputs() {
    // get the values from the inputs
    const nameValue = nameuser.value.trim();
    const passwordValue = password.value.trim();
    const phoneValue = phone.value.trim();
    const ageValue = age.value.trim()
    const emailValue = email.value.trim()
    const confirmPassValue = confirmPass.value.trim()
    // const genderValue = gender.value.trim();
    // const careerValue = career.value.trim();


    if (nameValue === "") {
        // show error
        // add error class
        setErrorFor(nameuser, ' This field can not be empty');
    } else {
        //add  success class
        setSuccessFor(nameuser);
    }

    if (passwordValue.length < 6  || passwordValue.length > 20) {
        setErrorFor(password , 'Your pass sould be between 6 and 20 char')
    } else {
        setSuccessFor(password)
    }

    if (confirmPassValue === "") {
        setErrorFor(confirmPass, 'Your Confrim Pass can not be empty');
    } else if  (passwordValue !== confirmPassValue){
        setErrorFor(confirmPass, 'Your Confrim Pass does not match');
    } else {
        setSuccessFor(confirmPass)
    }


    if (phoneValue === "" || isNaN(phoneValue)) {
        setErrorFor(phone , 'Your phone is invalid')
    } else {
        setSuccessFor(phone)
    }

    if (ageValue === "" || isNaN(ageValue)) {
        setErrorFor(age, 'Your Age is invalid')
    } else {
        setSuccessFor(age)
    }


    let at = emailValue.indexOf("@");
    let dot = emailValue.lastIndexOf(".")

    if (at < 1 || dot < at + 2 ||dot+2 >= emailValue.lenght ) {
        setErrorFor(email,'Your Email is invalid')
    } else {
        setSuccessFor(email);
    }


    // if (genderValue === "") {
    //     setErrorFor(gender,'this field can not be empty')
    // } else {
    //     setSuccessFor(gender)
    // }

    // if (careerValue === "") {
    //     setErrorFor(career,'this field can not be empty')
    // } else {
    //     setSuccessFor(career)
    // }
}



function setErrorFor(input, message) {
    const input_field = input.parentElement; // .input-field
    const small = input_field.querySelector('small')

    // add error message inside small 
    small.innerText = message

    //add error class

    input_field.className = 'input-field error'
}

function setSuccessFor(input) {
    const input_field = input.parentElement;
    input_field.className = 'input-field success'

}



