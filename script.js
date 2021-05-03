const button = document.getElementById('send');
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
        .then(response => {
            let object = JSON.parse(response);
            alert('Bonjour ' + object.prenom +object.nom);
        }

);

})