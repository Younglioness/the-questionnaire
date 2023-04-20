const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();
    fetch(`https://polinashneider.space/user`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer: Younglioness'
            },
            body: JSON.stringify({
                "name": "Дарья",
                "secondName": "Петролай",
                "phone": 89990000000,
                "email": "dasha@gmail.com",
                "agree": true
            })
        })
        .then((result) => {
            return result.json()
        })
        .then((json) => {
            new Toast({
                title: false,
                text: 'Форма успешно отправлена',
                theme: 'light',
                autohide: true,
                interval: 10000
            })
            console.log(json)
            form.reset();
        }).catch(err => {
            new Toast({
                title: false,
                text: 'Форму отправить не удалось',
                theme: 'dark',
                autohide: true,
                interval: 10000
            })
        })
        // Здесь твой код
});