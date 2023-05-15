const url = "http://localhost:5000/campers";

//2

export const getCampers = async () => {
    try {
        const result = await fetch(url);
        const campers = await result.json();
        return campers
    } catch (error) {
        
    }
}

// 
export const newCamper = async camper =>{
    try {
        await fetch(url,{
         method: "POST",
         body: JSON.stringify(camper),
         headers: {
            'Content-Type': 'application/json'
         }  
        })
        window.location.href= 'index.html'
    } catch (error) {
        
    }
}

//

export const deleteCamper = async id => {
    try {
        await fetch(`${url}/${id}`,{
            method: "DELETE"
        })
    } catch (error) {
        console.log("error ")
    }
}