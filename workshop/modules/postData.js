export const postData = async (url, data) =>{
    try {
        await fetch(url,{
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              'Content-type': 'application/json',
            }
        }).then(
            alert("Elemento Creado")
        );
        
    } catch (error) {
        console.error("Error fetching data");
    }
}