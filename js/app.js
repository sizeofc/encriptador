

function encriptar() {
    const inputText = document.getElementById('mensaje').value;
    if (esValido(inputText)) {
        if (inputText.trim() !== '') {
            document.getElementById('no-message').style.display = 'none';
            document.getElementById('resultado').style.display = 'block';
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
            
        }
    }
}

function desencriptar() {
    const inputText = document.getElementById('mensaje').value;
    if (inputText.trim() !== '') {
        document.getElementById('no-message').style.display = 'none';
        document.getElementById('resultado').style.display = 'block';
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
}

function esValido(texto) {
    // Expresión regular para verificar letras minúsculas y espacios
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

const textarea = document.getElementById('mensaje');

textarea.addEventListener('input', () => {
  textarea.style.height = 'auto';
  textarea.style.height = textarea.scrollHeight + 'px';
});