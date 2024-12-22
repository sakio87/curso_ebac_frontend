const form = document.getElementById('form-deposito');

function validaNome(nomeCompleto) {
    const nomeComArray = nomeCompleto.split('');
    return nomeComArray.length >= 2;
}

form.addEventListener('submit',function(e) {
    let formEValido = false;
    e.preventDefault();
    //codigo para nao carregar a pagina automaticamente //

    const nomeBeneficiario = document.getElementById('nome-Beneficiario');
    const numeroContaBeneficiario = document.getElementById('numero-Conta');
    const valorDeposito = document.getElementById('valor-Deposito');
    const successmessage = `Montante de:${valorDeposito.value} depositado para o cliente:${nomeBeneficiario.value} conta:` ${numeroContaBeneficiario.value};


    formEValido = validaNome(nomeBeneficiario.value)
    if (formEValido) {
        alert(successmessage);
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        alert('O nome não está completo');
    }
})
console.log(form);
