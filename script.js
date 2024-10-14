document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

   
    const formData = new FormData(this);
    const nome = formData.get('nome');
    const email = formData.get('email');
    const telefone = formData.get('telefone');
    const estado = formData.get('estado');

    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        alert('Por favor, introduza um endereço de e-mail válido.');
        return;
    }

 
    const telefoneRegex = /^\d{9}$/;
    if (!telefoneRegex.test(telefone)) {
        alert('Por favor, introduza um número de telefone válido com 9 dígitos.');
        return;
    }

   
    const data = {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        Zona_imóvel: estado
    };

    
    fetch('https://formspree.io/f/mrbggkyg', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        alert('Dados enviados com sucesso!');
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
