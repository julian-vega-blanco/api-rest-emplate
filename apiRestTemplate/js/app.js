//3
import {getCampers, deleteCamper} from '../apiConnection/API.js'


//1
(function(){
    const lista = document.querySelector(".lista")
    
    document.addEventListener("DOMContentLoaded", showCampers);
    lista.addEventListener("click", confirmDelete)
    async function showCampers(){
        
        const campers = await getCampers();
        console.log(campers);
        const contenedor = document.querySelector("tbody")
        campers.forEach((camper) => {
            const {nombre,imagen,edad,promedio,especialidad,id,expertoTecnologia,detalle} = camper;
            const rows = document.createElement("tr");
            rows.innerHTML = `
            <th scope="row">${id}</th>
                    <td><img src="img/${imagen}" class="cuenta alt=""></td>
                    <td>${nombre}</td>
                    <td>${edad}</td>
                    <td>${promedio}</td>
                    <td>${especialidad}</td>
                    <td>${expertoTecnologia}</td>
                    <td><button type="button" class="btn btn-warning">Details</button></td>
                    <td><button type="button" data-camper="${id}" class="btn btn-danger delete">Borrar</button></td>
            `
            contenedor.appendChild(rows);
        });
    } function confirmDelete(e){
        if(e.target.classList.contains("delete")){
            const camperId = parseInt(e.target.dataset.camper);
            const confirmar = confirm('Deseas llevar al camper a su casa?');
            if(confirmar){
                deleteCamper(camperId)
            }
            
        }
    }
})();

