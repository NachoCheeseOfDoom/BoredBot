const imgContain = document.getElementById('container')
// let img = document.createElement('img');


async function logMovies() {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");
    const dogs = await response.json();
    // img.src = movies.message
    console.log(dogs.message);


}


logMovies();

fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => console.log(data.message));