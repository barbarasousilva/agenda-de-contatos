const form = document.getElementById('form-contatos');
const nomes = [];
const telefones = [];
const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

const formataTelefone = (event) => {
    let inputTelefone = event.target;
    inputTelefone.value = mascaraTelefone(inputTelefone.value);
}

const mascaraTelefone = value => {
    if(!value) return "";
    value = value.replace(/\D/g, "");   
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value

}

function adicionaLinha() {
    if(telefones.includes(inputTelefone.value)) {
        alert('Contato já existe');
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value.formatTelefone);
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += '<td>';

        linhas += linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';
}
function atualizaTabela() {
    const tabela = document.querySelector('tbody');
    tabela.innerHTML = linhas;
}   