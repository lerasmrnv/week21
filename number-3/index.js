'use strict';

document.getElementById('btnClick').addEventListener("click", function (event) {
    event.preventDefault();

    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: new FormData(formElem)
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));

});