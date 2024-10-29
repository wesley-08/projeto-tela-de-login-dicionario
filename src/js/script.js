document.getElementById('Log In').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Aqui você pode adicionar a lógica de autenticação, se necessário
    // Se a autenticação for bem-sucedida, redirecione para a nova página

    window.location.href = 'dictionary.html'; // Redireciona para a página do dicionário
});