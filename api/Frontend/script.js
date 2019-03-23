$(() => {

    $('#register').click((e) => {
        e.preventDefault();

        const data = new FormData(document.getElementById('formRegister'));

        $.ajax({
            url: 'http://localhost:8000/users',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        })
    });

    $('#login').on('click', (e) => {
        e.preventDefault();

        const data = new FormData(document.getElementById('formLogin'));

        $.ajax({
            url: 'http://localhost:8000/users/sessions',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        }).then(response => {
            localStorage.setItem('user', JSON.stringify(response));
        })
    });


    $('#logout').on('click', (e) => {
        e.preventDefault();

        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
        if(user !== null) {
            const headers = {"Token": user.token};
            $.ajax({
                url: 'http://localhost:8000/users/sessions',
                headers: headers,
                processData: false,
                contentType: false,
                type: 'DELETE'
            }).then(() => {
                localStorage.removeItem('user');
            })
        } else {
            console.log('вы разлогинены');
        }

    });


    $("#send").click((e) => {

        e.preventDefault();

        const data = new FormData(document.getElementById("formData"));

        $.ajax({
            url: 'http://localhost:8000/products',
            data: data,
            processData: false,
            contentType: false,
            type: 'POST'
        }).then(response => {
            response.id = "asdadad";
            let form = $(`<form id=${response.id}>`);
            let name = $(`<input type="text" name="name" value=${response.name}>`);
            let price = $(`<input type="text" name="price" value=${response.price}>`);
            let descr = $(`<input type="text" name="description" value=${response.description}>`);
            let btn = $("<button type='submit' >save changhes<button/>");
            let image = $("<img/>").attr("src", 'http://localhost:8000/uploads/' + response.image);
            form.append(name, price, descr, image, btn);
            $("body").append(form);

            $("#" + response.id).submit((e) => {
                e.preventDefault();
                let id = e.target.id;
                const data = new FormData(document.getElementById(id));
                data.append("id", id);
                $.ajax({
                    method: 'POST',
                    url: `http://localhost:8000/products`,
                    data: data,
                    processData: false,
                    contentType: false,
                })
            })


        });
    });



});