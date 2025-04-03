document.getElementById('send-btn').addEventListener('click', function() {
  let userMessage = document.getElementById('user-message').value;
  if (userMessage.trim() === "") return;

  // Exibe a mensagem do usuário
  let chatBox = document.querySelector('.chat-box');
  let userMessageDiv = document.createElement('div');
  userMessageDiv.classList.add('message', 'user-message');
  userMessageDiv.innerHTML = `<span class="message-text">${userMessage}</span>`;
  chatBox.appendChild(userMessageDiv);

  // Resposta do bot
  let botResponse = getBotResponse(userMessage);
  let botMessageDiv = document.createElement('div');
  botMessageDiv.classList.add('message', 'bot-message');
  botMessageDiv.innerHTML = `<span class="message-text">${botResponse}</span>`;
  chatBox.appendChild(botMessageDiv);

  // Limpa o campo de entrada
  document.getElementById('user-message').value = '';
  chatBox.scrollTop = chatBox.scrollHeight; // Rola a tela para a última mensagem
});

// Função simples para simular a resposta do bot
function getBotResponse(userMessage) {
  if (userMessage.toLowerCase().includes("produto")) {
    return "Você quer saber mais sobre nossos produtos? Temos ótimas ofertas!";
  } else if (userMessage.toLowerCase().includes("ajuda")) {
    return "Claro! Como posso te ajudar?";
  } else {
    return "Desculpe, não entendi. Você pode reformular?";
  }
}
