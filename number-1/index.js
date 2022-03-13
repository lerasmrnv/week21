'use strict';

document.addEventListener("DOMContentLoaded", function(event){
    fetch("https://api.giphy.com/v1/stickers/search?api_key=MdkM19WjqhC11MT0oILPekDwRVt2aNJS&q=%D0%BA%D0%BE%D1%82&limit=5&offset=0&rating=g&lang=ru")
    .then(response => response.json())
    .then(gif => {
        document.getElementById("gif1").src = gif.data[0].images.original.url;
        document.getElementById("gif2").src = gif.data[1].images.original.url;
        document.getElementById("gif3").src = gif.data[2].images.original.url;
        document.getElementById("gif4").src = gif.data[3].images.original.url;
        document.getElementById("gif5").src = gif.data[4].images.original.url;
    })
    .catch(error => console.log(error));
});

