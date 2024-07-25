export const getData = async (url) => {
    try {
        const resp = await fetch(url);           
        
        const data = await resp.json();
        return data; //se retorna los datos

    } catch (error) {
        console.error("Error fetching data...")
        
    }

}