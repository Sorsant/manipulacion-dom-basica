const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')

//si el boton en html le ponemos el type button nos ahorramos hacer  el tema de el evento en la funcion y el submit cambiarlo por onclick

/* btn.addEventListener('click',sumarInputValues); */
form.addEventListener('submit',sumarInputValues);// cambiamos click por submit por que esta dentro del form

function sumarInputValues (event) {
event.preventDefault();// es para que el evento de boton del form, que resetea la web por defecto, no lo haga

const primerInput = parseInt(input1.value);
const segundoInput =parseInt(input2.value);
const sumaDeInputs = primerInput + segundoInput; 
pResult.innerText ='el resultado es: ' + sumaDeInputs;
};