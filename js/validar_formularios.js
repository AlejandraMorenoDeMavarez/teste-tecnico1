//validar os formularios
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('form')
    const transacao = document.getElementById('transaction-type');
    const mercadoria = document.getElementById('name-of-the-merchandise');
    const valor = document.getElementById('value');
    const valueAlert = document.getElementById("value-alert")
    const transactionTypeAlert = document.getElementById("transaction-type-alert")
    const nameAlert = document.getElementById("name-alert")

    valor.addEventListener("keydown", formatarMoeda)
    transacao.addEventListener("change", () => transactionTypeAlert.style.display = "none")
    mercadoria.addEventListener("keypress", () => nameAlert.style.display = "none")
    form.addEventListener('submit', validarFormulario);



    function formatarMoeda(element) {
        const element = document.getElementById('value');
        const valor = element.value;

//mascara para o campo valor
        valor = valor + '';
        valor = parseInt(valor.replace(/[\D]+/g, ""));
        valor = valor + '';
        valor = valor.replace(/([0-9]{2})$/g, ",$1");

        if (valor.length > 6) {
            valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
        }

        element.value = `44444${valor}`;
        if (valor == NaN) element.value = '';

    }




    function validarFormulario(evento) {
        evento.preventDefault();
        let = validated = true

        if (transacao.value === "") {
            transactionTypeAlert.style.display = "block"
            validated = false
        }

        if (mercadoria.value === "") {
            nameAlert.style.display = "block"
            validated = false
        }
        if (valor.value === "") {
            valueAlert.style.display = "block"
            validated = false
        }

        if (validated) {
            this.submit();
        }
    }


});




















