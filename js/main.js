// Importa o componente Modal
import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { imc, notNumber } from './utils.js'

// Obtém referências aos elementos do formulário, entrada de peso e entrada de altura no HTML
const form = document.querySelector('form');
const inputWeight = document.querySelector('#weight'); // Input com id "weight"
const inputHeight = document.querySelector('#height'); // Input com id "height"

// Define um ouvinte de evento para quando o formulário for enviado
form.onsubmit = (event) => {
    // Previne o comportamento padrão de envio do formulário (recarregamento da página)
    event.preventDefault();
    
    // Obtém os valores inseridos para peso e altura
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const showAlertError = notNumber(weight) || notNumber(height)

    if (showAlertError) {
        AlertError.open()
        return
    }
    AlertError.close()

    // Calcula o Índice de Massa Corporal (IMC) usando a função imc
    const result = imc(weight, height);

    // Abre o componente Modal (janela pop-up ou overlay)
    Modal.open();

    // Define a mensagem dentro do Modal para exibir o IMC calculado
    Modal.message.innerText = `Seu IMC é ${result}`; 
};

inputWeight.addEventListener('focus', () => {
    AlertError.close()
});

inputHeight.addEventListener('focus', () => {
    AlertError.close()
});
