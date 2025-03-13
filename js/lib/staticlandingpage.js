document.addEventListener('DOMContentLoaded', () => {
    const btnStaticSwap = document.querySelector('#btnNewRegister');

    if (btnStaticSwap) {
        btnStaticSwap.addEventListener('click', () => {
            window.location.href = 'components/register.html';
        });
    }
});

