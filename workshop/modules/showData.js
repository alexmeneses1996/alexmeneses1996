export const showData = (fetchedData, container) =>{

    container.innerHTML = ""
//`
    console.log(fetchedData);

    //se crean los div de categoria
    const divCatAdulto = document.createElement("div");
    const divCatInfantil = document.createElement("div");
    divCatAdulto.classList.add("adulto");
    divCatInfantil.classList.add("infantil");


    fetchedData.forEach(movie => {
       
        //id, Type, Title, Year, Value, Carrusel, Poster, Trailer,Description


        const div = document.createElement("div");
        div.classList.add("movie");
        div.setAttribute("id", movie.id);



        div.innerHTML = `
        <img src="${movie.Poster}"/>
        <div class="movie-info">
        <h3>${movie.Title}<h3>
        </div>`
        if (movie.Type =="Adulto"){
            divCatAdulto.appendChild(div);


        }
        else{
            divCatInfantil.appendChild(div);

        }

        
    });
    container.appendChild(divCatAdulto);
    container.appendChild(divCatInfantil);


}