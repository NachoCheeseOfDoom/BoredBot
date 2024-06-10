


// async function logMovies() {
//     const response = await fetch("https://dog.ceo/api/breeds/image/random");
//     const dogs = await response.json();
//     const imgContainer = document.getElementById('container');
//     // img.src = movies.message
//     console.log(dogs.message);
//     let img = document.createElement('img');
//     img.src = dogs.message;
//     imgContainer.appendChild(img)
// }

// logMovies();


// const dogImg = logMovies();
// console.log(logMovies())



// fetch("https://dog.ceo/api/breeds/image/random")
//     .then(res => res.json())
//     .then(data => {
//         const imgContainer = document.getElementById('container');
//         let img = document.createElement('img');
//         img.src = data.message;
//         imgContainer.appendChild(img)
//         // img.appendChild(img);
//         console.log(img)
//     });


// let img = document.createElement('img');
// img.src = data.message

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(res => res.json())
//     .then(data => {
//         document.getElementById('container').innerHTML = `
//         <h2>${data.activity}</h2>
//         `
//         console.log(data.activity)
//     })

const generateActivityBtn = document.getElementById('generate-btn');

generateActivityBtn.addEventListener("click", () => {
    generateActivity()

});

function generateActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(res => res.json())
        .then(data => {
            // const activityContainer = document.getElementById('container');
            const list = document.getElementById('ul-list');
            let li = document.createElement('li');
            li.innerHTML = `<p style="font-weight: bold;">${data.activity}</p>`
            list.appendChild(li)

            if (list.childElementCount >= 3) {
                generateActivityBtn.disabled = true
                generateActivityBtn.style.backgroundColor = "rgba(80, 80, 80, 0.722)"
            }
        })
}
