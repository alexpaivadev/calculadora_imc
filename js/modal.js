// Exporta um objeto `Modal` contendo elementos e funções relacionadas ao modal
export const Modal = {
    // Referências aos elementos do modal no DOM
    wrapper: document.querySelector('.modal-wrapper'),  // Contêiner principal do modal
    message: document.querySelector('.modal .title span'), // Elemento para exibir a mensagem
    buttonClose: document.querySelector('.modal .close'), // Botão para fechar o modal

    // Função para abrir o modal
    open() {
        Modal.wrapper.classList.add('open'); // Adiciona a classe 'open' para exibir o modal
    },

    // Função para fechar o modal
    close() {
        Modal.wrapper.classList.remove('open'); // Remove a classe 'open' para ocultar o modal
    }
};

// Adiciona um evento de clique ao botão de fechar
Modal.buttonClose.onclick = () => {
    Modal.close(); // Chama a função para fechar o modal quando o botão é clicado
};

window.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        Modal.close()
    }
})
