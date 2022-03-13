'use strict';

let btn = document.querySelector('.btn');

let errors = [];

function checkValidity(input) {
    let validity = input.validity;
    if (validity.valueMissing) {
        errors.push('Поле ' + input.placeholder + ' не заполнено');
    }

    if (validity.patternMismatch) {
        errors.push('Неверный формат заполнения');
    }

    if (validity.tooShort) {
        errors.push('Пароль должен быть больше 8 символов');
    }
}

function checkAll() {
    errors = [];
    let inputs = document.querySelectorAll("input");
    let input = document.querySelector("input");

    for (input of inputs) {
        checkValidity(input);
    }

    document.getElementById("result").innerHTML = errors.join('. </br>');
    console.log(errors);
}


btn.addEventListener("click", function (event) {
    event.preventDefault();

    checkAll();
    if(errors.length === 0){ 
        
    let user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        phone: document.getElementById('phone'),
        city: document.getElementById('city')
    }

    fetch("https://httpbin.org/post",
    {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
    })
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => console.log(error));
}
});