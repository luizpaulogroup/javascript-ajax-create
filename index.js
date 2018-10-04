$(document).ready(function () {
    $(".setIdCliente").on("click", function () {
        var id = this.dataset.id;
        $.ajax({
            url: 'ajax.php',
            data: {
                id: id
            }
        }).done(function (request) {
            funcionario = JSON.parse(request);
            $("#nome_profissional").val(funcionario.nome_profissional);
            $("#email_profissional").val(funcionario.login);
        })
    });
});
$(document).ready(function () {
    $("#sendData").on("submit", function (e) {
        var html = "";
        var erro = document.querySelector("#erro");
        e.preventDefault();
        var form = $('#sendData')[0];
        var nome = form.nome_profissional.value;
        if (nome == "") {
            html = "<div class='alert alert-danger' role='alert'>CAMPO NOME REQUERIDO</div>";
            erro.innerHTML = html;
            return false;
        }
        var formData = new FormData(form);
        formData.set('nome_profissional', nome);
        $.ajax({
            url: "post.php",
            processData: false,
            dataTypeIn: 'plain',
            contentType: false,
            type: 'POST',
            data: formData
        }).done(function (data) {
            if (data === "true") {
                location.reload();
            } else {
                html += "<div class='alert alert-danger' role='alert'> A simple danger alert—check it out!</div>";
                erro.innerHTML = html;
            }
        });
    });
});
