import { newPet } from "../apiConnection/PETS.js";
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validateCamper)

function validateCamper(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const dueño = document.querySelector("#dueño").value;
    const edad = document.querySelector("#edad").value;
    const peso = document.querySelector("#peso").value;
    const especie = document.querySelector("#especie").value;
    

    //
    const pet = {
        nombre: nombre,
        dueño: dueño,
        edad: edad,
        peso: peso,
        especie: especie
    }
    if(validate(pet)) {
        alert('che una del mundial')
        return
    }
    newPet(pet);

}

function validate(objeto){
    return !Object.values(objeto).every(element =>
        element
        !=='')
}