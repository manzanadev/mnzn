function copyContract() {
    const address = document.getElementById('contractAddress').innerText;
    const btn = document.getElementById('copyBtn');

    if (address.includes('PENDIENTE')) {
        btn.innerText = '⚠️ Aún no disponible';
        setTimeout(() => btn.innerText = '📋 Copiar', 2000);
        return;
    }

    navigator.clipboard.writeText(address).then(() => {
        btn.innerText = '✅ ¡Copiado!';
        setTimeout(() => btn.innerText = '📋 Copiar', 2000);
    }).catch(err => {
        // Fallback para navegadores antiguos
        const textarea = document.createElement('textarea');
        textarea.value = address;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        btn.innerText = '✅ ¡Copiado!';
        setTimeout(() => btn.innerText = '📋 Copiar', 2000);
    });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
