const loginForm = document.querySelector('form#loginForm');

loginForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const emailValue = ev.target.querySelector("input[name='email']").value;
    const passwordValue = ev.target.querySelector('input[name="password"]').value;

    if (emailValue === 'ltdn@phoenix.localhost') {
        alert('Hello, Root!');
        if (passwordValue === 'baloi') {
            alert('Access granted');
        } else {
            alert('Incorrect password');
        }
    } else {
        alert('O mang wena?');
    }



    console.log({ emailValue, passwordValue })
})