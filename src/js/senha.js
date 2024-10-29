function recoverPassword() {
    const email = document.getElementById('email').value;
    const message = document.getElementById('message');
    
    if (email) {
        message.style.display = 'block';
        document.getElementById('recoveryForm').reset();
        setTimeout(() => {
            message.style.display = 'none';
        }, 3000);
    } else {
        alert("Por favor, insira um e-mail válido.");
    }
}