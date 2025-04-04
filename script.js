document.addEventListener("DOMContentLoaded", () => {
  // Função para gerar as mensagens
  function addMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<span class="message-text">${message}</span>`;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  // Função para gerar as opções de perguntas
  function addOptions(options) {
    const userInput = document.getElementById('user-input');
    userInput.innerHTML = ''; // Limpa as opções anteriores

    options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option.text;
      button.onclick = () => handleUserChoice(option.value);
      userInput.appendChild(button);
    });
  }

  // Função para tratar a escolha do usuário
  function handleUserChoice(choice) {
    addMessage(choice, 'user-message');
    setTimeout(() => {
      let botResponse = '';
      if (choice === 'produtos') {
        botResponse = "Aqui estão nossos produtos incríveis: Produto 1, Produto 2 e Produto 3!";
        addMessage(botResponse, 'bot-message');
        addOptions([{ text: "Ver preços", value: 'preços' }, { text: "Voltar", value: 'voltar' }]);
      } else if (choice === 'ajuda') {
        botResponse = "Claro! Como posso te ajudar? Precisa de mais informações?";
        addMessage(botResponse, 'bot-message');
        addOptions([{ text: "Sim, me ajude", value: 'ajuda_sim' }, { text: "Não, obrigado", value: 'ajuda_nao' }]);
      } else if (choice === 'preços') {
        botResponse = "O preço dos nossos produtos varia de R$99 a R$299. O que você gostaria de saber mais?";
        addMessage(botResponse, 'bot-message');
        addOptions([{ text: "Ver produtos", value: 'produtos' }, { text: "Voltar", value: 'voltar' }]);
      } else if (choice === 'voltar') {
        botResponse = "Ok, vou voltar para as opções iniciais.";
        addMessage(botResponse, 'bot-message');
        showInitialQuestions();
      } else if (choice === 'ajuda_sim') {
        botResponse = "Estou aqui para ajudar! O que mais você precisa?";
        addMessage(botResponse, 'bot-message');
      } else if (choice === 'ajuda_nao') {
        botResponse = "Ok, se precisar de ajuda, só chamar!";
        addMessage(botResponse, 'bot-message');
      }
    }, 1000); // Simula o tempo de resposta do bot
  }

  // Função para mostrar as perguntas iniciais
  function showInitialQuestions() {
    addMessage("Olá! Como posso te ajudar hoje?", 'bot-message');
    addOptions([
      { text: "Quero saber sobre produtos", value: 'produtos' },
      { text: "Preciso de ajuda", value: 'ajuda' }
    ]);
  }

  // Inicia o chat
  showInitialQuestions();
});
