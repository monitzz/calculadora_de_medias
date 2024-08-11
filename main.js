const form = document.getElementById("form-atividade");
let mediaFinal = 0;
let notas = [];
let atividades = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionarLinhas();

    mediaFinal = calcularNotas();

    atualizarTabela();

    function adicionarLinhas() {
        const inputNomeAtividade = document.getElementById("nome-atividade");
        const inputNotaAtividade = document.getElementById("nota-atividade");
        const corpoTabela = document.querySelector("tbody");
        const imgAprovado = "<img src='./images/aprovado.png' alt='Emoji contente' />"
        const imgReprovado = "<img src='./images/reprovado.png' alt='Emoji triste' />"
        const eAprovado = inputNotaAtividade.value >= 7;

        if (atividades.includes(inputNomeAtividade.value)) {
            alert(`A atividade ${inputNomeAtividade.value} já foi inserida.`)
        }
        else {
            notas.push(parseFloat(inputNotaAtividade.value));
            atividades.push(inputNomeAtividade.value);

            let linha = "<tr>";
            linha += `<td>${inputNomeAtividade.value}</td>`;
            linha += `<td>${inputNotaAtividade.value}</td>`;
            linha += `<td>${eAprovado ? imgAprovado : imgReprovado}</td>`
            linha += `</tr>`;

            corpoTabela.innerHTML += linha;

            inputNomeAtividade.value = "";
            inputNotaAtividade.value = "";
            inputNomeAtividade.focus();
        }
    }

    function calcularNotas() {
        let resultado = 0;

        for (let i = 0; i < notas.length; i++) {
            resultado += notas[i];
        }

        return resultado / notas.length;
    }
    
    function atualizarTabela() {
        const spanAprovado = "<span class='resultado aprovado'>Aprovado</span>";
        const spanReprovado = "<span class='resultado reprovado'>Reprovado</span>";

        document.getElementById("nota-final").innerHTML = mediaFinal.toFixed(1);
        document.getElementById("resultado-media-final").innerHTML = mediaFinal >= 7 ? spanAprovado : spanReprovado;
    }
});
