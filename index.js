let input = document.getElementById('email-input')
let button = document.getElementById('email-button')
let emailValidation = document.getElementById('email-validation')
let emailIsValid = `
    <p id="validation-status">Email validated successfully</p>
`
let emailIsNotValid = `
    <p id="validation-status">Please provide a valid email</p>
`
let inputEmpty = `
    <p id="validation-status">Please input an email</p>
`
let errorIcon = `
    <img id="error-icon" src="images/icon-error.svg">
`

button.onclick = function validateEmail() {

    if(document.getElementById('validation-status')) {
        document.getElementById('validation-status').remove()
    }
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(input.value).toLowerCase())) {
        console.log('email validated')
        emailValidation.insertAdjacentHTML("afterend", emailIsValid)
        if (document.getElementById('error-icon')) {
            document.getElementById('error-icon').remove()
        }
    } else if (input.value === '') {
        console.log('email empty')
        emailValidation.insertAdjacentHTML("afterend", errorIcon)
        emailValidation.insertAdjacentHTML("afterend", inputEmpty)
    } else if (!re.test(String(input.value).toLowerCase())) {
        console.log('email not validated')
        emailValidation.insertAdjacentHTML("afterend", errorIcon)
        emailValidation.insertAdjacentHTML("afterend", emailIsNotValid)
    }
}