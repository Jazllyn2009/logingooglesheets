var scriptURL = "https://script.google.com/macros/s/AKfycbySQ5c3qt39_gY1dEYCSFkAs0s3RibAkwtwsMLuTcB7c_ApWLmkR95wlHsDAGSpDAY/exec"

var form = document.forms['google-sheet']

form.addEventListener('submit', e=>{
    e.preventDefault()
    fetch(scriptURL,{method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById('form-alert').innerHTML = "Data has sorted")
    .catch(error => document.getElementById('form-alert').innerHTML = "Data has not sorted")
})