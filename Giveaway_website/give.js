//function alerta() {
  //  let rnd = document.getElementById("lottext").value            
  //  let mensaje= ("El ganador es " + "@" + rnd)
  //  document.getElementById("random-name").innerHTML = mensaje
//}

let btnRandom = document.querySelector('button');
let result = document.querySelector('p');

var textarea = 



let users = document.getElementById('lottext');
users.innerText=[""]

//['Checho', 'Jhon', 'Kuisa', 'James', 'Carolina', 'Petermanjarrez', 'Simon', 'Ronald'];
 
function alerta(min, max) {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
 
    return result;
}
 
btnRandom.addEventListener('click', () => {
    let index = alerta(0, users.length-1);
    result.innerText = "El ganador es @ "+ users[index];
});