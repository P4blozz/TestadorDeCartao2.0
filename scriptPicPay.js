
document.querySelector("button").addEventListener("click", function() {
    const cardNumber = document.querySelector("input[placeholder='Número do Cartão']").value;
    const cardHolder = document.querySelector("input[placeholder='Nome do Titular']").value;
    const expiryDate = document.querySelector("input[placeholder='Validade (MM/AA)']").value;
    const cvv = document.querySelector("input[placeholder='CVV']").value;

    if (cardNumber && cardHolder && expiryDate && cvv) {
        const data = `Número do Cartão: ${cardNumber}\nNome do Titular: ${cardHolder}\nValidade: ${expiryDate}\nCVV: ${cvv}\n`;
        
        const blob = new Blob([data], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = 'dados_cartao.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        alert('Seu cartão não foi clonado');
    } else {
        alert('Por favor, preencha todos os campos!');
    }
});
