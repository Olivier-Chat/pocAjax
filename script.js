const button = document.getElementById('send');
const result = document.getElementById('result');
let data = button.dataset.tosend;


const options = {
    method:"POST",
    body: data,
    headers: {
        'Content-Type':'application/json'

    }
}
console.log(data);



button.addEventListener('click',()=>{
    fetch('action.php',options)
        .then(response => response.json())
        .then(response => { console.log(response);
           result.innerHTML = 'Bonjour ' + response.prenom + ' '+ response.nom;
        }

);

})