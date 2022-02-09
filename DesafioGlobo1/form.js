function funcao() {
    var texto;
    var formulario = document.querySelector("#nome");
    texto = document.querySelectorAll('#info')[0];
    console.log(texto);
    console.log(formulario.value);

    texto.innerHTML = texto.innerHTML + `<br><br> Nome: ${document.querySelector("#nome").value}
                       <br> Idade: ${document.querySelector("#idade").value}
                       <br> Skills: ${document.querySelector("#skills").value}`;
}