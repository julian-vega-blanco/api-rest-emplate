import { newCamper } from "../apiConnection/API.js";
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validateCamper)

function validateCamper(e){
    e.preventDefault();
    const nombre = document.querySelector("#nombre").value;
    const promedio = document.querySelector("#promedio").value;
    const edad = document.querySelector("#edad").value;
    const nivelIngles = document.querySelector("#nivelIngles").value;
    const especialidad = document.querySelector("#especialidad").value;
    const nivelCampus = document.querySelector("#nivelCampus").value;
    const expertoTecnologia = document.querySelector("#expertoTecnologia").value;
    

    //
    const camper = {
        nombre: nombre,
        promedio: promedio,
        edad: edad,
        nivelIngles: nivelIngles,
        especialidad: especialidad,
        nivelCampus: nivelCampus,
        expertoTecnologia: expertoTecnologia,
        edad: edad
    }
    if(validate(camper)) {
        alert('che una del mundial')
        return
    }
    newCamper(camper);

}

function validate(objeto){
    return !Object.values(objeto).every(element =>
        element
        !=='')
}
