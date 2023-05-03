const submit = document.getElementById('submit');
const form = document.getElementById('form');
const email = document.getElementById('email');

const error = document.createElement('p');
const msg = 'Please provide a valid email address'
error.classList.add('error-text');
error.textContent = msg;

form.addEventListener('submit', (e) => {
    // console.log('hello');
    e.preventDefault();

    const regEx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    if(!email.value.match(regEx)){
        form.classList.add('error');
        form.insertBefore(error, submit)
        email.style.borderColor = 'var(--Light-Red)'
        console.log('no');
    } else {
        form.classList.remove('error');
        form.removeChild(error)
        email.style.borderColor = 'var(--Pale-Blue)'
        console.log('hello')
    }
})