// fetch("http://www.omdbapi.com/?s=harry potter&apikey=bca53b5f") 
//       .then(response => response.json())
//       .then(data => {
         
//          data.Search.forEach(element => {
//             const main = document.createElement("div");
//             const Title = document.createElement("p");
//             Title.innerHTML = element.Title;
//             const Year = document.createElement("p");
//             Year.innerHTML = element.Year
//             const Poster = document.createElement("img");
//             Poster.setAttribute('src', element.Poster);
//             console.log(Title);
//             console.log(Year)
//             main.appendChild(Title);
//             main.appendChild(Year);
//             main.appendChild(Poster);
//             document.getElementsByTagName("body")[0].appendChild(main);

//          });
//       })


function searchMovie(){
   const NewTitle = document.querySelector('input').value;
   console.log(NewTitle)

   document.querySelectorAll('div').forEach(element => {
      element.remove();
   }
      )


   fetch(`http://www.omdbapi.com/?s=${NewTitle}&apikey=bca53b5f`) 
      .then(response => response.json())
      .then(data => {
         console.log(data)
         data.Search.forEach(element => {
            const main = document.createElement("div");
            const Title = document.createElement("p");
            Title.innerHTML = element.Title;
            const Year = document.createElement("p");
            Year.innerHTML = element.Year
            const Poster = document.createElement("img");
            Poster.setAttribute('src', element.Poster);
            console.log(Title);
            console.log(Year)
            main.appendChild(Title);
            main.appendChild(Year);
            main.appendChild(Poster);
            document.getElementsByTagName("body")[0].appendChild(main);

         });
      })
};
