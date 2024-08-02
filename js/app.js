

function encriptar() {
    let inputText = document.getElementById('mensaje').value;
    if (inputText.trim() !== '') {
        document.getElementById('no-message').style.display = 'none';
        document.getElementById('resultado').style.display = 'flex';
        // lógica de encriptación
        const mapeo = {
            'e': 'enter',
            'i': 'imes',
            'a': 'ai',
            'o': 'ober',
            'u': 'ufat'
        };
        let encriptado = inputText.split('').map(letra => mapeo[letra] || letra).join('');
        document.getElementById('output-text').value = encriptado;
        document.getElementById('mensaje').value = "";
    }
}

function desencriptar() {
    const inputText = document.getElementById('mensaje').value;
    if (inputText.trim() !== '') {
        document.getElementById('no-message').style.display = 'none';
        document.getElementById('resultado').style.display = 'flex';
        // lógica de encriptación
        let encriptado = inputText
            .replace(/enter/g, 'e')
            .replace(/imes/g, 'i')
            .replace(/ai/g, 'a')
            .replace(/ober/g, 'o')
            .replace(/ufat/g, 'u');

        document.getElementById('output-text').value = encriptado;
    }
}

//boton para copiar el texto encriptado
function copiar() {
    const outputText = document.getElementById('output-text');
    outputText.select();
    document.execCommand('copy');
    showMessage("Texto copiado!");
    document.getElementById('no-message').style.display = 'flex';
    document.getElementById('resultado').style.display = 'none';
    outputText.value="";
}

function esValido(texto) {
    // Expresión regular para verificar letras minúsculas y espacios
    const regex = /^[A-Zàáâãäåæèéêëìíîïòóôõöøùúûüýÿñçşĉĝĥĵŝŭ]+$/;
    return regex.test(texto);
}

function showMessage(text) {
    let dialogo = document.getElementById('show-message');
    dialogo.innerHTML = text;
    dialogo.showModal();
    //function setTimeout 2s for close dialog
    setTimeout(function () {
        dialogo.close();
    }, 2000);
}

let textArea = document.getElementById('mensaje');
textArea.addEventListener('input', function () {
    if (esValido(textArea.value[textArea.value.length - 1])) {
        textArea.setAttribute("maxlength", textArea.value.length);
        textArea.classList.add('textarea-error');
        document.getElementById('boton_encriptar').disabled = true;
        showMessage("no se permite MAYUSCULAS ni acentos");
    } else {
        textArea.removeAttribute("maxlength");
        textArea.classList.remove('textarea-error');
        document.getElementById('boton_encriptar').disabled = false;

    }

})

