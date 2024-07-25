import { getData } from "../modules/getData.js";
import { showData } from "../modules/showData.js";

const url = "http://localhost:3000/movies";

const main = document.getElementById("main");


//se llama a la funcion getdata para traer los datos del archivo json
const movies = await getData(url);


showData(movies, main);
//cripto.randomUUID
//console.log(movies);
//https://www.themoviedb.org/t/p/original/eRLlrhbdYE7XN6VtcZKy6o2BsOw.jpg
    