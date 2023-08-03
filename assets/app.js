const terms = document.getElementById('terms');
const submit = document.getElementById('submit');

terms.addEventListener('change', (e) => {
    submit.disabled = !e.currentTarget.checked;
});